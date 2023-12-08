import { Router, Request, Response, NextFunction } from "express";
import { Customer } from "../models/Customer";
import { CustomersController } from "../controllers/CustomersController";
import * as yup from "yup";
import { Not } from "typeorm";

let controller: CustomersController = new CustomersController();

async function validarPayload(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    let schema = yup.object({
        name: yup.string().min(3).max(255).required(),
        type: yup.string().min(3).max(255),
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

let rotas: Router = Router();
rotas.post("/customer", validarPayload, controller.create);
rotas.post("/email", controller.sendEmailWelcome);

export default rotas;
