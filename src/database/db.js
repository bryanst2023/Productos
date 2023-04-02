const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'tienda',
  port: '3307'
});

conexion.connect((error) => {
  if(error) {
    console.log(error);
  }
  console.log("Conectado a db.");
});

module.exports = conexion;