import { Request, Response } from "express";
import { Customer } from "../models/Customer";
import * as puppeteer from "puppeteer";
import * as nodemailer from "nodemailer";


export class CustomersController {
    async create(req: Request, res: Response): Promise<Response> {
        let body = req.body;
        let name = body.name;
        let type = body.type;
        let phone = body.phone;
        let email = body.email;
        let city = body.city;

        try {
            let customer: Customer = await Customer.create({
                name: name,
                type: type,
                phone: phone,
                email: email,
                city: city,
            }).save();

            await this.sendEmailWelcome(req, res);

            return res.status(200).json(customer)

        } catch (error) {
            return res.status(404).json({ message: "Erro interno do servidor" })
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            let customers: Customer[] = await Customer.find();

            return res.status(200).json(customers);
        } catch (error) {
            return res.status(200).json({ message: "Erro interno do servidor" });
        }
    }

    async sendEmailWelcome(req: Request, res: Response): Promise<Response> {
        let body = req.body;

        let emailConfig = {
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            requireTLS: true,
            tls: {
                rejectUnauthorized: false,
                ciphers: "SSLv3",
            },
            auth: {
                user: "atur.albernas2002@outlook.com",
                pass: process.env.PASS,
            },
        };

        let mailOptions = {
            from: "atur.albernas2002@outlook.com",
            to: body.email,
            subject: "Bem vindo a BIMachine",
            html: `Estamos muito felizes em ter você conosco ${body.name}!`,
        };

        let transporter = nodemailer.createTransport(emailConfig);

        transporter.sendMail(mailOptions, async function (error, info) {
            if (error) {
                console.log("Erro ao enviar email:" + error);
                return res.status(401).send("Erro ao enviar email" + error);
            } else {
                console.log("Email enviado: " + info.response);
                return res.status(200).send("Email enviado: " + info.response);
            }
        });

        return res.status(401);
    }

}