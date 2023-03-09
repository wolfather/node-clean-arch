import { UserEntity } from '../entity/user.entity';
import { UseCaseImp } from '../../implementation/usecase.imp';
import { PresenterImp } from "../../implementation/presenter.imp";
import { errorResponseFactory, ERROR_CODE } from '../../utils/factory/errorresponsefactory';
import { HttpRequestAdapter, HttpResponseAdapter } from "../../presentation/adapter/httpadapter.interface";

export class UpdateUserPresenter 
    implements PresenterImp<Partial<HttpResponseAdapter<UseCaseImp<UserEntity>>>> {
    constructor (private readonly usecase: UseCaseImp<UserEntity>) {}
    
    async handle(req: HttpRequestAdapter): Promise<Partial<HttpResponseAdapter<UseCaseImp<UserEntity>>>> {
        const {
            id,
            name,
            email,
            password,
            floor,
            number,
            parkPlace,
            documentNumber,
            phoneNumber,
            token,
        } = req.body;

        if(id && name && email && password) {
            const input = {
                name, 
                email, 
                password, 
                id, 
                floor,
                number,
                parkPlace,
                documentNumber,
                phoneNumber,
                token,
            };
            const {
                success, data, code
            } = await this.usecase.execute(input);
    
            return success ? {data} : errorResponseFactory(code);
        }
        return errorResponseFactory(ERROR_CODE.SERVER);
    }
}