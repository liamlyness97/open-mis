import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const school = sqliteTable('school', {
    id: integer('id').primaryKey(),
    schoolName: text('school_name').notNull(),
    localAuthority: text('local_authority')
})

export type InsertSchool = typeof school.$inferInsert;
export type SelectSchool = typeof school.$inferSelect;