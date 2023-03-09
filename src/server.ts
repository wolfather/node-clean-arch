import { App } from './app';

import * as dotenv from 'dotenv';
import { DbInfra } from './infra/db.infra';
import { UserInfra } from './user/infra/user.infra';

dotenv.config();

const db = new DbInfra();
const userDb = new UserInfra()

db.connect()
    .then(() => {
        const server = new App(userDb);
        server.app.listen(
            process.env.PORT,
            () => console.log(`APP RUNNING ON ${process.env.PORT}`)
        )
    })
    .catch((err: Error) => console.log('err conn', err));
