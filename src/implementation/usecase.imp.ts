import { ERROR_CODE } from "../utils/factory/errorresponsefactory";

export interface ExecuteImp<T> {
    success: boolean;
    data: Partial<T|T[]>;
    code: ERROR_CODE;
    message: string;
}
export interface UseCaseImp<T> {
    execute(input?: unknown): Promise<Partial<ExecuteImp<T>>>;
}
 
/** 
 * Implementing "UseCaseImp"
 * @author "Israel" <so.israelweb@gmail.com>
 * @interface UseCaseImp<SomeEntity>
 * @version 0.0.5
 * @requires ExecuteImp
 * @requires SomeEntity
 * @example ```
 * class SomeUseCase implements UseCaseImp<SomeEntity> {
 *   ,,,
 *   async execute(input: SomeType): Promise<Partial<ExecuteImp<SomeEntity>>> {}
 * }
 * ```
**/
export interface UseCaseImp<T> {
    execute(input?: unknown): Promise<Partial<ExecuteImp<T>>>;
}