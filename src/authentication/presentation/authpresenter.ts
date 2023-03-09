import { errorResponseFactory, ERROR_CODE, ERROR_NUM } from '../../utils/factory/errorresponsefactory';
import { UseCaseImp } from '../../implementation/usecase.imp';

import { HttpRequestAdapter, HttpResponseAdapter } from '../../presentation/adapter/httpadapter.interface';
import { PresenterImp } from '../../implementation/presenter.imp';
import { AuthCredentialsEntity } from '../entity/authcredentials.entity';

export class AuthPresenter implements PresenterImp<Partial<HttpResponseAdapter<UseCaseImp<AuthCredentialsEntity>>>> {
    constructor(private readonly usecase: UseCaseImp<AuthCredentialsEntity>) {}

    async handle(req: HttpRequestAdapter): Promise<Partial<HttpResponseAdapter<UseCaseImp<AuthCredentialsEntity>>>> {
        try {
            const {email, password} = req.body;
            if(email && password) {
                const {data, success, code} = await this.usecase.execute({email, password});
                console.log({data, success, code});
        
                return success ? {data} : errorResponseFactory(code);
            }

            return errorResponseFactory(ERROR_CODE.INVALID_CREDENTIALS);
        } catch(err) {
            return {statusCode: ERROR_NUM.SERVER};
        }
    }
}