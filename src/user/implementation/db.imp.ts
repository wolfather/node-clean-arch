import { AuthCredentialsEntity } from "../../authentication/entity/authcredentials.entity";
import { UserEntity } from "../entity/user.entity";

export abstract class UserDBImp {
    abstract createUser: (input: Partial<UserEntity>) => Promise<Partial<UserEntity>>;
    abstract getUser: (input: string) => Promise<Partial<UserEntity>>;
    abstract getUsers: (input: unknown) => Promise<UserEntity[]>;
    abstract updateUser: (input: Partial<UserEntity>) => Promise<Partial<UserEntity>>;
    abstract deleteUser: (input: string) => Promise<Partial<UserEntity>>;
    abstract authenticateUser: (input: AuthCredentialsEntity) => Promise<Partial<UserEntity>>;
}