import { UserDBImp } from "../implementation/db.imp";
import { ERROR_CODE } from "../../utils/factory/errorresponsefactory";
import { ExecuteImp, UseCaseImp } from "../../implementation/usecase.imp";
import { UserEntity } from "../entity/user.entity";

export class DeleteUserUseCase implements UseCaseImp<UserEntity> {
    constructor(private readonly db: UserDBImp) {}

    async execute(input: string): Promise<Partial<ExecuteImp<UserEntity>>> {
        try {
            if(input) {
                const {createdAt} = await this.db.deleteUser(input);
                
                if(createdAt) {
                    return {
                        success: true,
                        data: {createdAt},
                        code: ERROR_CODE.OK,
                    };
                }

                return {code: ERROR_CODE.SERVER};
            }

            return {code: ERROR_CODE.INVALID_CREDENTIALS};
        } catch(err) {
            return { code: ERROR_CODE.SERVER };
        }
    }
}