import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const parents = sqliteTable('parents', {
    id: integer('id').primaryKey(),
    firstName: text('first_name').notNull(),
    surname: text('surname').notNull(),
    primaryContact: integer('primary_contact', { mode: 'boolean' }),
    contactNumber: text('contact_number').notNull(),
    emailAddress: text('email_address').notNull(),
})

