import express, { Application, NextFunction, Request, Response } from 'express';

const app:Application = express();
const port:number = 8000;

app.get('/', (_req: Request, res: Response, next:NextFunction)=>{
     res.json({hello:"world"});
     return next();
});

app.listen(port, ()=>{
    console.log(`Server is now started on ${port}...`)
})