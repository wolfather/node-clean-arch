import { UserEntity } from "../../src/user/entity/user.entity";

export const checkIncluded = (list: any, input: Partial<UserEntity>): Partial<UserEntity[]> => (
    list.filter((user: UserEntity) => user.email === input.email)
);