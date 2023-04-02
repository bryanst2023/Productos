const router = require('express').Router();
const conexion = require('../database/db');
const crud = require('../controllers/crud');

// Pagina principal
router.get('/', (req, res) => { 
  conexion.query('SELECT * FROM productos', (error, results) => {
    if(error) {
      console.log("Error");
    } else {
      res.render('index', {
        titulo: "Inicio",
        productos:results
      });
    }
  });
});

// Pagina agregar
router.get('/agregar', (req, res) => {
  res.render('crear', {
    titulo: "Agregar producto"
  });
});

// Se agrega el producto
router.post('/salvar', crud.salvar);

// Pagina para editar
router.get('/editar/:id', (req, res) => {
  let id = req.params.id;
  let sql = 'SELECT * FROM productos WHERE id = '+ id;
  
  conexion.query(sql, (error, results) => {
    if(error) {
      console.log(error);
    } else {
      res.render('editar', {
        titulo: "Modificar producto",
        producto: results[0]
      });
      // console.log(results[0])
    }
  });
});

// Se actualiza el producto
router.post('/actualizar', crud.actualizar);

// Se borra producto
router.get('/borrar/:id', (req, res) => {
  let id = req.params.id;
  let sql = 'DELETE FROM productos WHERE id = ' + id;

  conexion.query(sql, (error, results) => {
    if(error) {
      consolee.log(error);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;