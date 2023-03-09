import { Request, Response } from "express";

export function mockRequest() {
    const req: any = {};
    req.body = jest.fn().mockReturnValue({});
    req.query = {id: '1'};
    req.params = jest.fn().mockReturnValue('');
    req.json = {name: 'item 1'};

    return req as Request;
}

export function mockResponse() {
    const res: any = {};

    res.send = jest.fn().mockReturnThis()
    res.status = jest.fn().mockReturnValue(200)
    res.json = {
        name: 'valid name',
        email: 'valid@mail.com',
        id: '123456'
    };

    return res as Response;
};