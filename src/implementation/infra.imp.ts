import { AuthCredentialsEntity } from "../authentication/entity/authcredentials.entity";
import { UserEntity } from "../user/entity/user.entity";

export abstract class DBImp {
    abstract connect: () => Promise<void>;
    abstract disconnect: () => Promise<void>;

    abstract authenticateUser: ({email, password}: AuthCredentialsEntity) => Promise<Partial<UserEntity>>;
}