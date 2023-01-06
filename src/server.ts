import fastify from 'fastify';

const server = fastify();

server.get('/', async(req, reply) => {
    reply.send({app: 'Clean'})
})
.listen({port: 3000}, (err, address) => {
    if(err) {
        console.log({err})
        process.exit();
    }
    console.log(`App running in ${address}`);
})
