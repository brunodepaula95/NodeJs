//quando for subir um projeto node para o git não subir a pasta node modules, criar um gitignore
//Nodemon é uma forma de o servidor atualizar instantaneamente quando você atualiza o arquivo



//const {Person} = require("./person")
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

//require("./modules/path");

//require("./modules/fs");

//require("./modules/http");

//const person = new Person("John");
