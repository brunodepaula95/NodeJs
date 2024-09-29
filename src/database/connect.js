const mongoose = require('mongoose');

const connectToDatabase = async () =>{
    await mongoose.connect('', (error) => {
      if (error) {
        return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error);
      }

      return console.log("Conexão realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;