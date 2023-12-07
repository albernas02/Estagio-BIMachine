import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import customerRoutes from "./routes/customer";

let server: Express = express();
let port: Number = Number(process.env.PORT || 3000);

server.use(cors());
server.use(express.json());

server.use(customerRoutes);

server.use((req: Request, res: Response, next: NextFunction) => {
    console.log('[' + (new Date) + ']' + req.method + ' ' + req.url);
    next();
});

export default {
    start() {
        server.listen(port, () => {
            console.log(`servidor iniciado na porta ${port}`);
        });
    },
};