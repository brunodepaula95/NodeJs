const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', '/src/views');

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers['content-type']}`);

  next();
})

app.get("/views/users" , async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", {users});
});

//endpoint para pegar todos os usuarios
app.get("/users", (req, res) => {
  try{
    const users = UserModel.find({});

    res.status(200).json(users);
  } catch {
    return res.status(500).send(error.message);
  }
});


//endpoint para pegar apenas um usuario por ID
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

//criar usuario
app.post('/users', async (req, res) => {
    try {
      const user = await UserModel.create(req.body)

      res.status(201).json(user)

    } catch (error){
      res.status(500).send(error.message);
    }
} )

app.path('/users/:id' , async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndDelete(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));