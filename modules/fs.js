//Com o fs vamos manipular o sistema de arquivos


const fs = require('fs')
const path = require('path')

//criar uma pasta
//fs.mkdir(path.join(__dirname, '/test'), (error) => {
//  if (error) {
//    return console.log('Erro: ', error)
// }

//  console.log("Pasta criada com sucesso!")
//})


//criar um arquivo
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello node!", (error) => {
  if (error) {
    return console.log("Erro: ", error)
  }

  console.log("Arquivo criado com sucesso!");
});


  //adicionar a um arquivo
 //fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello World!', (error) => {
 //   if (error) {
 //     return console.log('Erro: ', error)
 //   }

 //   console.log("Arquivo modificado com sucesso!")
 // })
//})

//ler arquivos
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
  if (error) {
    return console.log('Erro: ', error)
  }

  console.log(data)
})