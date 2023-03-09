import { UserValidation } from "../../utils/validation/uservalidation";
import { ExecuteImp, UseCaseImp } from "../../implementation/usecase.imp";
import { UserDBImp } from "../implementation/db.imp";
import { UserEntity } from "../entity/user.entity";
import { ERROR_CODE } from "../../utils/factory/errorresponsefactory";
import { Hash } from "../../middleware/hash/hash.middleware";

export class UpdateUserUseCase implements UseCaseImp<UserEntity> {
    constructor(private readonly db: UserDBImp) {}

    async execute(input: Partial<UserEntity>): Promise<Partial<ExecuteImp<UserEntity>>> {
        try {
            const {
                id,
                name,
                email,
                password,
                documentNumber,
                phoneNumber,
                floor,
                number,
                parkPlace,
            } = input;

            if(id && documentNumber && phoneNumber && floor && number && parkPlace && 
                UserValidation.validateUserData({name, email, password})
            ) {
                const hash = new Hash();
                const passwordHashed = await hash.encrypt(password || '');

                const user = await this.db.updateUser({
                    id,
                    email,
                    name,
                    password: passwordHashed,
                    documentNumber,
                    phoneNumber,
                    floor,
                    number,
                    parkPlace,
                } as UserEntity);

                return user.id ? 
                    {
                        success: true,
                        data: user,
                        code: ERROR_CODE.OK,
                    } : 
                    { code: ERROR_CODE.BAD_REQUEST };
            }
            return { code: ERROR_CODE.INVALID_CREDENTIALS };
        } catch(err) {
            return { code: ERROR_CODE.SERVER };
        }
    }
}