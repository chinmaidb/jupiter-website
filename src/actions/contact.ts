// src/actions/contact.ts
import { defineAction, ActionError } from "astro:actions";
import { z } from "astro/zod";
import { turso, initContactsTable } from "../utils/turso";

export const sendContact = defineAction({
  accept: "json",
  input: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    projectType: z.string().min(2).max(100),
    message: z.string().min(10).max(500),
    recaptchaToken: z.string(),
  }),
  handler: async (input) => {
    const { name, email, projectType, message, recaptchaToken } = input;

    if (!recaptchaToken) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "reCAPTCHA token missing",
      });
    }

    const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("Missing RECAPTCHA_SECRET_KEY env var");
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Server configuration error",
      });
    }

    // Verify with Google reCAPTCHA v3
    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const params = new URLSearchParams();
    params.append("secret", secretKey);
    params.append("response", recaptchaToken);

    let verifyData: {
      success: boolean;
      score?: number;
      action?: string;
    };

    try {
      const verifyResponse = await fetch(verifyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      });
      verifyData = await verifyResponse.json();
    } catch (err) {
      console.error("reCAPTCHA network error:", err);
      throw new ActionError({
        code: "BAD_GATEWAY",
        message: "Failed to verify reCAPTCHA",
      });
    }

    const MIN_SCORE = 0.5;
    if (
      !verifyData.success ||
      (typeof verifyData.score === "number" && verifyData.score < MIN_SCORE) ||
      (verifyData.action && verifyData.action !== "contact_form")
    ) {
      console.warn("reCAPTCHA v3 verification failed", verifyData);
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "reCAPTCHA validation failed",
      });
    }

    // Insert into Turso DB
    try {
      await initContactsTable();

      await turso.execute({
        sql: `
          INSERT INTO contacts (name, email, project_type, message)
          VALUES (?, ?, ?, ?)
        `,
        args: [name, email, projectType, message],
      });
    } catch (dbError) {
      console.error("Turso database insertion error:", dbError);
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to save contact information",
      });
    }

    return {
      success: true,
      message: "Contact saved successfully",
    };
  },
});
