import { z } from 'zod';

export const ZUser = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    role: z.string(),
    password: z.string(),
    resetPasswordToken: z.string().nullable(),
    resetPasswordExpire: z.string().nullable(),
    createdAt: z.string().nullable()
});

export type TUser = z.infer<typeof ZUser>;