import { ServerApp } from "./app";


const app = new ServerApp();

app.server.listen({port: 3000}, (err, address) => {
    if(err) {
        console.log({err})
        process.exit();
    }
    console.log(`App running in ${address}`);
})
