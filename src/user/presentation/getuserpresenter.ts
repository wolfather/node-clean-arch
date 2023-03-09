import { UserEntity } from "../entity/user.entity";
import { UseCaseImp } from "../../implementation/usecase.imp";
import { PresenterImp } from "../../implementation/presenter.imp";
import { errorResponseFactory, ERROR_CODE } from "../../utils/factory/errorresponsefactory";
import { HttpRequestAdapter, HttpResponseAdapter } from "../../presentation/adapter/httpadapter.interface";

export class GetUserPresenter 
    implements PresenterImp<Partial<HttpResponseAdapter<UseCaseImp<UserEntity>>>> {
    constructor(private readonly usecase: UseCaseImp<UserEntity>) {}

    async handle(req: Partial<HttpRequestAdapter>): Promise<Partial<HttpResponseAdapter<UseCaseImp<UserEntity>>>> {
        try {
            /*eslint ignore next */
            const {id} = req.params;

            if(id) {
                const {
                    success, data, code
                } = await this.usecase.execute(id);

                return success ? {data} : errorResponseFactory(code);
            }
            return errorResponseFactory(ERROR_CODE.INVALID_CREDENTIALS);
        } catch(err) {
            return errorResponseFactory(ERROR_CODE.SERVER);
        }
    }
}