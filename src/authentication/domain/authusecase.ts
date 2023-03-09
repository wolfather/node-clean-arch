import { AuthCredentialsEntity } from '../entity/authcredentials.entity'
import { UserEntity } from '../../user/entity/user.entity';
import { UserDBImp } from '../../user/implementation/db.imp';
import { Hash } from '../../middleware/hash/hash.middleware';
import { ExecuteImp, UseCaseImp } from '../../implementation/usecase.imp';
import { ERROR_CODE } from '../../utils/factory/errorresponsefactory';

export class AuthUseCase implements UseCaseImp<AuthCredentialsEntity> {
    constructor(
        private readonly db: UserDBImp,
        private readonly hash: Hash
    ) {}

    async execute(input: AuthCredentialsEntity): 
        Promise<Partial<ExecuteImp<AuthCredentialsEntity>>> {
        try {
            const {email, password} = input;
            
            if(email && password) {
                const user = await this.db.authenticateUser({email, password}) as UserEntity;
                const passIsValid = this.hash.compare(password, user.password);

                if(passIsValid) {
                    return {
                        success: true,
                        data: user,
                        code: ERROR_CODE.OK
                    };
                }

                return {code: ERROR_CODE.INVALID_CREDENTIALS};
            }
            return {code: ERROR_CODE.BAD_REQUEST};
 
        } catch(err) {
            return {code: ERROR_CODE.SERVER};
        }
    }
}