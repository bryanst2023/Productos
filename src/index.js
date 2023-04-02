const express = require('express');
const {create} = require('express-handlebars');
const { json } = require('express/lib/response');
const path = require('path');

// Inicializacion
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
const hbs = create({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'components'),
  extname: '.hbs'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended:false}));
//app.use(express(json));

// Rutas
app.use(require('./routes/index'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Servidor escuchando
app.listen(app.get('port'), () => {
  console.log("Server on");
});