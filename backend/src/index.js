const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*


*Metodos HTTP
GET: Buscar uma informação no back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/


/*
Parametros:

Query: parametros nomeados enviados na rota após o "?" (Filtros, paginação)
Route: parametros utilizados para indentificar recurso
Request Body: Corpo da requisição.
*/

/*
Driver: SELECT * FROM users
Query Builder: table('user')
*/





app.listen(3333);
