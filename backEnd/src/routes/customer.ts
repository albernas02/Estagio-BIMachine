import { Router, Request, Response, NextFunction } from "express";
import { Customer } from "../models/Customer";
import { CustomersController } from "../controllers/CustomersController";
import * as yup from "yup";
import { Not } from "typeorm";

let controller: CustomersController = new CustomersController();

async function validarPayload(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    let schema = yup.object({
        name: yup.string().min(3).max(255).required(),
        type: yup.string().min(3).max(255).required(),
        phone: yup.string().min(9).max(15).required(),
        email: yup.string().email().required(),
        city: yup.string().min(3).max(255).required()
    });

    let payload = req.body;

    try {
        req.body = await schema.validate(payload, {
            abortEarly: false,
            stripUnknown: true,
        });
        return next();
    } catch (error) {

        if (error instanceof yup.ValidationError) {
            return res.status(400).json({ erros: error.errors });
        }
        return res.status(500).json({ error: "ops" });
    }
}

async function validarSeEmailExiste(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    let email: string = req.body.email;
    let id: number | undefined = req.params.id ? Number(req.params.id) : undefined;

    let customer: Customer | null = await Customer.findOneBy({ email, id: id ? Not(id) : undefined });//quando o id do editar for igual o id

    if (customer) {
        return res.status(422).json({ error: "Email ja cadastrado" });
    }
    return next();
}

let rotas: Router = Router();
rotas.get("/customer",validarPayload, validarSeEmailExiste, controller.create);

export default rotas;
