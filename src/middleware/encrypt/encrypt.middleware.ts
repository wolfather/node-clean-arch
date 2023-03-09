import { NextFunction, Request, Response } from "express";
import { Hash } from "../../middleware/hash/hash.middleware";

export class EncryptMiddleware {
    constructor() {}
    async intercept(req: Request, res: Response, next: NextFunction): Promise<void> {
        if(req.body) {
            const hash = new Hash();
            const encryptedPass = await hash.encrypt(req.body.password);

            req.body.password = encryptedPass;

            next();
        }
    }
}