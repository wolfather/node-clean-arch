import { AuthUseCase } from "../../../src/authentication/domain/authusecase";
import { UseCaseImp } from "../../../src/implementation/usecase.imp";

import { Hash } from "../../../src/middleware/hash/hash.middleware";
import { ERROR_CODE } from "../../../src/utils/factory/errorresponsefactory";
import { MockDbImp } from "../../user/implementation/mockdb";
import { UserDBImp } from "../../../src/user/implementation/db.imp";
import { AuthCredentialsEntity } from "../../../src/authentication/entity/authcredentials.entity";

describe('AuthUseCase', () => {
    let db: UserDBImp;
    let usecase: UseCaseImp<AuthCredentialsEntity>;
    const hash = new Hash();
    let spyDbAuthenticateUser: any;
    let spyHashCompare: any;
    
    beforeEach(async() => {
        db = new MockDbImp();
        usecase = new AuthUseCase(db, hash);
        spyDbAuthenticateUser = jest.spyOn(db, 'authenticateUser');
        spyHashCompare = jest.spyOn(hash, 'compare');
    });

    it('should assert the instanceof and execute method', () => {
        expect(usecase).toBeInstanceOf(AuthUseCase);
        expect(usecase.execute).toBeDefined();
    });

    it('should throw statusCode SERVER_ERROR when no parameter were provided in execute()', async() => {
        const result = await usecase.execute();

        expect(result).toEqual({code: ERROR_CODE.SERVER});
    });
    
    it('should throw statusCode BAD_REQUEST when some parameter is missing execute()', async() => {
        const result = await usecase.execute({email: 'valid@mail.com'});

        expect(result).toEqual({code: ERROR_CODE.BAD_REQUEST});
    });
    
    it('should throw statusCode INVALID_CREDENTIALS when email provided is not valid in base', async() => {
        const invalidEmailCredentials = {
            email: 'invalid@mail.com',
            password: '123456',
        };
        spyDbAuthenticateUser.mockResolvedValue({
            id: '12345',
            email: 'valid@mail.com',
            password: '123456',
        });

        const result = await usecase.execute(invalidEmailCredentials);

        expect(result).toEqual({code: ERROR_CODE.INVALID_CREDENTIALS});
    });
    
    it('should throw statusCode INVALID_CREDENTIALS when password provided did not match with the base', async() => {
        const invalidPasswordCredentials = {
            email: 'valid@mail.com',
            password: '000000',
        };

        spyDbAuthenticateUser.mockResolvedValue({
            id: '12345',
            email: 'valid@mail.com',
            password: '123456',
        });
        spyHashCompare.mockImplementation((rawPassword, encryptedPassword) => {
            return false
        });

        const result = await usecase.execute(invalidPasswordCredentials);

        expect(result).toEqual({code: ERROR_CODE.INVALID_CREDENTIALS});
    });
    
    it('should return statusCode OK when email and password provided match with the base', async() => {
        const validCredentials = {
            email: 'valid@mail.com',
            password: '123456',
        };

        spyDbAuthenticateUser.mockResolvedValue({
            id: '12345',
            email: 'valid@mail.com',
            password: '123456',
        });
        spyHashCompare.mockImplementation((rawPassword, encryptedPassword) => {
            return true;
        });

        const {code, success} = await usecase.execute(validCredentials);

        expect(code).toEqual(ERROR_CODE.OK);
        expect(success).toBeTruthy();
    });



});