import { column, defineDb, defineTable } from 'astro:db';

const ContactUs = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    fullName: column.text(),
    emailId: column.text(),
    projectType: column.text(),
    projectDetails: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {ContactUs}
});
