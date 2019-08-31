var express = require('express');
var router = express.Router();
// import todos as empty array //
let todos = require('../data/todos');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Unit 2 Assessment',
    todos
  });
});

module.exports = router;

router.post('/', function(req, res) {
  req.body.done = false;
  todos.push(req.body);
  res.redirect('/');
})

router.delete('/:id', (req, res) => {
  todos.splice(req.params.id,1);
  res.redirect('/')
})
