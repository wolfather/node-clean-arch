import { PresenterImp } from '../../implementation/presenter.imp'
import { UseCaseImp } from '../../implementation/usecase.imp';
import {
    HttpRequestAdapter,
    HttpResponseAdapter,
} from "../../presentation/adapter/httpadapter.interface";
import {
    errorResponseFactory,
    ERROR_CODE,
    ERROR_NUM,
} from '../../utils/factory/errorresponsefactory';
import { UserEntity } from '../entity/user.entity';

export class GetUsersPresenter 
    implements PresenterImp<Partial<HttpResponseAdapter<UseCaseImp<UserEntity>>>> {
    constructor (private readonly usecase: UseCaseImp<UserEntity>) {}
    
    async handle(req: HttpRequestAdapter): Promise<Partial<HttpResponseAdapter<UseCaseImp<UserEntity>>>> {
        try {
            const {id} = req.params;

            //bypass for while
            if(id.split('=').pop()) {
                const input = id;
                
                const { data, success, code } = await this.usecase.execute(input);
    
                return success ? {
                    data, 
                    statusCode: ERROR_NUM.OK
                } : errorResponseFactory(code);
            }
            return errorResponseFactory(ERROR_CODE.BAD_REQUEST);
        } catch(err) {
            return errorResponseFactory(ERROR_CODE.SERVER);
        }
    }
}