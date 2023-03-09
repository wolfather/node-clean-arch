import { ExecuteImp, UseCaseImp } from "../../implementation/usecase.imp";
import { UserDBImp } from "../implementation/db.imp";
import { ERROR_CODE } from "../../utils/factory/errorresponsefactory";
import { UserEntity } from "../entity/user.entity";

export class GetUserUseCase implements UseCaseImp<UserEntity> {
    constructor(private readonly db: UserDBImp) {}

    async execute(input: string): Promise<Partial<ExecuteImp<UserEntity>>> {
        try {
            if(input) {
                const result = await this.db.getUser(input);

                if(result.id) {
                    return {
                        success: true,
                        data: result,
                        code: ERROR_CODE.OK
                    };
                }
                return {code: ERROR_CODE.BAD_REQUEST};
            }
            return {code: ERROR_CODE.INVALID_CREDENTIALS};

        } catch(err) {
            return {code: ERROR_CODE.SERVER};
        }
    }
}