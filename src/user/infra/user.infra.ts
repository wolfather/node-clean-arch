
import { DbInfra } from "../../infra/db.infra";
import { UserEntity } from "../entity/user.entity";
import { UserDBImp } from "../implementation/db.imp";

export class UserInfra extends DbInfra implements UserDBImp {
    constructor() {
        super();
    }

    async getUser(input: string): Promise<Partial<UserEntity>> {
        const user = await this.prisma.users.findUnique({
            where: {id: input},
            select: {
                id: true,
                name: true,
                email: true,
            }
        }) as Partial<UserEntity>;

        return user;
    }
    
    async getUsers(input: unknown): Promise<UserEntity[]> {
        const listUsers = (await this.prisma.users.findMany({
            select: {
                name: true, 
                email: true, 
                id: true,
            }
        })) as Partial<UserEntity[]>;

        return listUsers as UserEntity[];
    }

    async updateUser(input: Partial<UserEntity>): Promise<Partial<UserEntity>> {
        const {
            id, 
            email,
            name,
            password,
            documentNumber,
            phoneNumber,
            floor,
            number,
            parkPlace
        } = input;

        const user = await this.prisma.users.update({
            where: {id},
            data: {
                name, 
                password, 
                email,
                documentNumber,
                phoneNumber,
                floor,
                number,
                parkPlace
            },
            select: {
                id: true,
                name: true,
                email: true,
                documentNumber: true,
                phoneNumber: true,
                floor: true,
                number: true,
                parkPlace: true,
            }
        });

        return user as Partial<UserEntity>;
    }

    async deleteUser(input: string): Promise<Partial<UserEntity>> {
        const user = await this.prisma.users.delete({
            where: {id: input},
            select: {
                createdAt: true
            }
        })  as Partial<UserEntity>;

        return user;
    }

    async createUser(input: Partial<UserEntity>): Promise<Partial<UserEntity>> {
        const {
            password, 
            documentNumber,
            phoneNumber,
            floor,
            number,
            parkPlace
        } = input;

        const userExist = await this.prisma.users.findFirst({
            where: {documentNumber},
            select: {createdAt: true}
        });

        if(userExist) {
            return userExist;
        }

        const user = await this.prisma.users.create({
            data: {
                email: input.email!, 
                password, 
                name: input.name!,
                documentNumber: input.documentNumber!,
                phoneNumber,
                floor,
                number,
                parkPlace
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        }) as Partial<UserEntity>;
        
        return user;
    }
}