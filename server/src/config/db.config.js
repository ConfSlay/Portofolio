// .env
require('dotenv').config();//pour utiliser le .env
const DB_HOST = process.env.DB_HOST; //cherche dans les variables d'environnements
const DB_USER = process.env.DB_USER; //cherche dans les variables d'environnements
const DB_PASSWORD = process.env.DB_PASSWORD; //cherche dans les variables d'environnements
const DB_NAME = process.env.DB_NAME; //cherche dans les variables d'environnements
const DB_PORT = process.env.DB_PORT; //cherche dans les variables d'environnements

module.exports = {
  HOST: DB_HOST,
  USER: DB_USER,
  PASSWORD: DB_PASSWORD,
  DB: DB_NAME,
  port: DB_PORT,
  dialect: "mysql"
};