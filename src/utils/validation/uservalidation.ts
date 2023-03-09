import { UserEntity } from '../../user/entity/user.entity';
import { z } from 'zod'

export class UserValidation {
    static validateUserData(userData: Partial<UserEntity>): boolean {
        const userDataSchema = z
            .object({
                email: z.string().email().trim(),
                name: z.string().min(2).trim(),
                password: z.string().min(4).trim()
            })
            .describe('user validation');

        return userDataSchema.safeParse(userData).success;
    }
}