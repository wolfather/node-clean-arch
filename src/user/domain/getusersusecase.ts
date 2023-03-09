import { ExecuteImp, UseCaseImp } from '../../implementation/usecase.imp';
import { UserDBImp } from '../implementation/db.imp';
import { UserEntity } from '../entity/user.entity';
import { ERROR_CODE } from '../../utils/factory/errorresponsefactory';

export class GetUsersUseCase implements UseCaseImp<UserEntity> {
    constructor(private readonly db: UserDBImp) {}

    async execute(input: string): Promise<Partial<ExecuteImp<UserEntity>>> {
        try {
            if(input) {
                const usersList: UserEntity[] = await this.db.getUsers(input);

                return usersList.length ?
                    {
                        success: !!usersList.length,
                        data: usersList,
                        code: ERROR_CODE.OK,
                    } :
                    { code: ERROR_CODE.BAD_REQUEST };
            }

            return {code: ERROR_CODE.INVALID_CREDENTIALS}
        } catch(err) {
            return {code: ERROR_CODE.SERVER};
        }
    }
}
