const conexion = require('../database/db');

exports.salvar = (req, res) => {
  const nombre = req.body.nombreP;
  const precio = req.body.precioP;
  const cantidad = req.body.cantidadP;

  let sql = 'INSERT into productos(nombre,precio,cantidad) VALUES('+'"'+nombre+'"'+','+precio+','+cantidad+')';

  conexion.query(sql, (error, results) => {
    if(error) {
      console.log(error);
    } else {
      res.redirect('/');
    }
  });
};

exports.actualizar = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombreP;
  const precio = req.body.precioP;
  const cantidad = req.body.cantidadP;

  let sql = 'UPDATE productos SET nombre = "' + nombre + '",precio = ' + precio + ',cantidad = ' + cantidad + ' WHERE id = ' + id;

  conexion.query(sql, (error, results) => {
    if(error) {
      console.log(error);
    } else {
      res.redirect('/');
    }
  });
};