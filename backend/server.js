const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
global.__basedir = __dirname;
 
const db = require('./config/db.config');

const Cliente = db.Cliente;

let router = require('./routes/router');

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

// Create o servidor
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("O App está executando em http://%s:%s", host, port); 
})

db.sequelize.sync({force: true}).then(() => {
  console.log('Reescreve e popula a tabela com { force: true }');
  Cliente.sync().then(() => {
    const clientes = [
      { nome: 'Pedro', email: 'pedro@email.com' ,idade: 23 },
      { nome: 'Sara',  email: 'sara@email.com' , idade: 31 },
      { nome: 'Emilly',  email: 'emilly@email.com' , idade: 18 },
	  { nome: 'Ricardo',  email: 'ricardo@email.com' , idade: 42 },
    ]
    
    for(let i=0; i<clientes.length; i++){
      Cliente.create(clientes[i]);
    }
  })
}); 