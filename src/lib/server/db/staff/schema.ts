import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const staff = sqliteTable('staff', {
    id: integer('id').primaryKey(),
    firstName: text('first_name').notNull(),
    middleNames: text('middle_names'),
    surname: text('surname').notNull(),
    dob: text('dob').notNull(),
    category: text('category', { enum: ['Teacher', 'Associate', 'Teaching Assistant'] }).notNull(),
    startDate: text('start_date').notNull(),
    leaveDate: text('leave_date')
})