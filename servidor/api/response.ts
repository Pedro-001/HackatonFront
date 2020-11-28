import { Request, Response } from "express";

function success (req: Request, res: Response, message: any, status:number) {
    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(statusCode).send({
        error: false,
        body: statusMessage,
    });
}

function error (req: Request, res: Response, message: any, status:number) {
    let statusCode = status || 500;
    let statusMessage = message || 'Internal server error';

    res.status(statusCode).send({
        error: false,
        body: statusMessage,
    });
}

export default {
    error,
    success
}