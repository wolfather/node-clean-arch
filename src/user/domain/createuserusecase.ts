import { UserDBImp } from "../implementation/db.imp";
import { UserEntity } from "../entity/user.entity";
import { UserValidation } from "../../utils/validation/uservalidation";
import { ERROR_CODE } from "../../utils/factory/errorresponsefactory";
import { Hash } from "../../middleware/hash/hash.middleware";
import { ExecuteImp, UseCaseImp } from "../../implementation/usecase.imp";

export class CreateUserUseCase implements UseCaseImp<UserEntity> {
    constructor(private readonly db: UserDBImp) {}

    async execute(input: Partial<UserEntity>): Promise<Partial<ExecuteImp<UserEntity>>> {
        try {
            const {
                email,
                name,
                password,
                documentNumber,
                phoneNumber,
                floor,
                number,
                parkPlace,
            } = input;

            if(UserValidation.validateUserData({email, name, password})) {
                const hash = new Hash();
                /* istanbul ignore hash.encrypt [optional-docs] */
                const passwordHashed = await hash.encrypt(password || '');

                const userCreated = await this.db.createUser({
                    email,
                    name,
                    password: passwordHashed,
                    documentNumber,
                    phoneNumber,
                    floor,
                    number,
                    parkPlace,
                });

                return userCreated.createdAt ?
                    { code: ERROR_CODE.BAD_REQUEST } :
                    {
                        success: true,
                        data: userCreated,
                        code: ERROR_CODE.OK
                    };
            }

            return {code: ERROR_CODE.INVALID_CREDENTIALS};
        } catch(err) {
            return {code: ERROR_CODE.SERVER};
        }        
    }
}