import {
    pgTable,
    serial,
    text,
    date,
    integer,
    doublePrecision,
    uuid,
} from "drizzle-orm/pg-core";



export const users = pgTable('users',{
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    role: text('role').notNull().default('user'),
    password: text('password').notNull(),
    resetPasswordToken: text('resetPasswordToken'),
    resetPasswordExpire: text('resetPasswordExpire'),
    createdAt: date('createdAt'),
});

export const account = pgTable('account',{
    id: uuid('id').references(() => users.id),
    username: text('username'),
    icon: text('icon'),
    status:text('status')
})

