import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const pupils = sqliteTable('pupils', {
    id: integer('id').primaryKey(),
    firstName: text('first_name').notNull(),
    middleNames: text('middle_names'),
    surname: text('surname').notNull(),
    currentYear: text('current_year')
})

export type InsertPupils = typeof pupils.$inferInsert;
export type SelectPupils = typeof pupils.$inferSelect;