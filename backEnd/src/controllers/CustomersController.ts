import { Request, Response } from "express";
import { Customer } from "../models/Customer";


export class CustomersController {
    async create(req: Request, res: Response) {
        let body = req.body;
        let name = body.name;
        let type = body.type;
        let phone = body.phone;
        let email = body.email;

        try {
            let customer: Customer = await Customer.create({
                name: name,
                type: type,
                phone: phone,
                email: email,
            }).save();

            return res.status(200).json(customer)
            
        } catch (error) {
            return res.status(200).json({ message: "Erro interno do servidor" })
        }
    }
}