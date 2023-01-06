import fastify from 'fastify';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'

export class ServerApp {
    server;

    constructor() {
        this.server = fastify({
            logger: true
        }).withTypeProvider<JsonSchemaToTsProvider>();

        this.routes()
    }

    private routes(): ServerApp {
        this.server.get('/', async(req, reply) => {
            reply.send({app: 'Node Clean Arch'})
        });

        return this;
    }
}