import { PrismaClient } from "../../prisma/src/generated/client";

import { UserEntity } from "../user/entity/user.entity";
import * as dotenv from 'dotenv';
import { AuthCredentialsEntity } from "../authentication/entity/authcredentials.entity";
import { DBImp } from "../implementation/infra.imp";

dotenv.config()

export class DbInfra implements DBImp {
    protected prisma = new PrismaClient();
    constructor() {}

    async connect(): Promise<void> {
        await this.prisma.$connect();
    }

    async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
    }

    async authenticateUser(input: AuthCredentialsEntity): Promise<Partial<UserEntity>> {
        const {email} = input;

        const user = await this.prisma.users.findFirst({
            where: {email},
            select: {
                id: true,
                name: true,
                password: true,
                email: true,
            }
        });

        return user as UserEntity;
    }
}