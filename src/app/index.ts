import { AuthPresenter } from './../authentication/presentation/authpresenter';
import { AuthUseCase } from './../authentication/domain/authusecase';
import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { GetUsersPresenter } from '../user/presentation/getuserspresenter';
import { CreateUserPresenter } from '../user/presentation/createuserpresenter';
import { UpdateUserPresenter } from '../user/presentation/updateuserpresenter';
import { RouterAdapter } from '../presentation/adapter/routeradapter';
import { CreateUserUseCase } from '../user/domain/createuserusecase';
import { UpdateUserUseCase } from '../user/domain/updateuserusecase';
import { GetUsersUseCase } from '../user/domain/getusersusecase';
import { DeleteUserUseCase } from '../user/domain/deleteuserusecase';
import { DeleteUserPresenter } from '../user/presentation/deleteuserpresenter';
import { UserDBImp } from '../user/implementation/db.imp';
import { GetUserUseCase } from '../user/domain/getuserusecase';
import { GetUserPresenter } from '../user/presentation/getuserpresenter';
import { Hash } from '../middleware/hash/hash.middleware';

export class App {
    app: Application;

    constructor(
        private readonly userDb: UserDBImp,
    ) {
        this.app = express();
        this._setup();
    }
    
    private _setup(): void {
        this.app.options('*', cors())
        this.setupRouter()
            .then(routes => {
                this.app
                    .use(express.json())
                    .use(bodyParser.json())
                    .use(bodyParser.urlencoded({extended: true}))
                    .use(routes)
                    .use(cors({origin: '*'}));
            })
            .catch(err => {console.log({err})});
    }

    private async setupRouter(): Promise<Router> {
        const homeUseCase = new GetUsersUseCase(this.userDb);
        const getUserUseCase = new GetUserUseCase(this.userDb);
        const createUserUseCase = new CreateUserUseCase(this.userDb);
        const updateUserUseCase = new UpdateUserUseCase(this.userDb);
        const deleteUserUseCase = new DeleteUserUseCase(this.userDb);
        const authUseCase = new AuthUseCase(this.userDb, new Hash());

        const routes = Router();
        const routerAdapter = new RouterAdapter();

        routes
            .post('/auth', 
                await routerAdapter.adapt(new AuthPresenter(authUseCase))
            )
            .get('/:id', 
                await routerAdapter.adapt(new GetUsersPresenter(homeUseCase))
            )
            .post('/user', 
                await routerAdapter.adapt(new CreateUserPresenter(createUserUseCase))
            )
            .get('/user/:id',
                await routerAdapter.adapt(new GetUserPresenter(getUserUseCase))
            )
            .put('/user', 
                await routerAdapter.adapt(new UpdateUserPresenter(updateUserUseCase))
            )
            .delete('/user', 
                await routerAdapter.adapt(new DeleteUserPresenter(deleteUserUseCase))
            );
        
        return routes;
    }
}
