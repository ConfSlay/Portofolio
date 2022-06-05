const nodemailer = require('nodemailer');
// .env
require('dotenv').config();//pour utiliser le .env
const MAIL_HOST = process.env.MAIL_HOST; //cherche dans les variables d'environnements
const MAIL_PORT = process.env.MAIL_PORT; //cherche dans les variables d'environnements
const MAIL_USER = process.env.MAIL_USER; //cherche dans les variables d'environnements
const MAIL_PASSWORD = process.env.MAIL_PASSWORD; //cherche dans les variables d'environnements
const MAIL_DESTINATION = process.env.MAIL_DESTINATION; //cherche dans les variables d'environnements

exports.Contact = async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: MAIL_HOST, 
        port: MAIL_PORT,
        secure: true, /* if port 465 = TLS/SSL */
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASSWORD,
        }
    });

    try {
        await transporter.sendMail({
            from: MAIL_USER,
            to: MAIL_DESTINATION,
            subject: `Mail from ${req.body.name}`,
            html: `
                <p><b>his name</b> : ${req.body.mail_name}</p>
                <p><b>his email</b> : ${req.body.mail_email}</p>
                <p><b>message</b> : ${req.body.mail_message}<p>`,
        });
        return res.status(200).send({message: "Email sent !"});
    } catch (err) {
        return res.status(500).send({ message: "Internal server error ..." });
    }
};

