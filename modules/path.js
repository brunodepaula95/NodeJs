const path = require('path') //importa o path

//Basename
console.log(path.basename(__filename))//com o basename você consegue ver apenas o nome do arquivo

//Nome do diretório atual
console.log(path.dirname(__filename))//com o dirname você consegue ver apenas o nome do diretório

//Extensão do arquivo
console.log(path.extname(__filename))//com o extname você consegue ver a extensão do arquivo

//Criar um objeto path
console.log(path.parse(__filename))//com o parse você consegue criar um objeto com várias informações do arquivo

//Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"))//Usamos path.join() para garantir que os caminhos sejam construídos corretamente, independentemente do sistema operacional.