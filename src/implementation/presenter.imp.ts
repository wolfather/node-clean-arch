import { 
    HttpRequestAdapter, 
    HttpResponseAdapter,
} from "../presentation/adapter/httpadapter.interface";

/**
 * Implementing "PresenterImp"
 * @author "Israel" <so.israelweb@gmail.com>
 * @interface PresenterImp<Partial<HttpResponseAdapter<UseCaseImp<SomeEntity>>>>
 * @version 0.0.3
 * @requires HttpResponseAdapter
 * @requires UseCaseImp
 * @requires SomeEntity
 * @example ```
 * class SomePresenter implements PresenterImp<Partial<HttpResponseAdapter<UseCaseImp<SomeEntity>>>> {
 *   constructor(private readonly usecase: UseCaseImp<SomeEntity>) {}
 * 
 *   async handle(req: HttpRequestAdapter): Promise<Partial<HttpResponseAdapter<UseCaseImp<SomeEntity>>>> {}
 * }
 * ```
 *
 */
export interface PresenterImp<T> {
    handle(req: Partial<HttpRequestAdapter>): Promise<Partial<T>>;
}