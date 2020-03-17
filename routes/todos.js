var express = require("express")
    router = express.Router()


// get list of todos
router.get("/api/todos", (req, res) => {
  Todo.find({}, (err, todos) => {
    res.json(todos)
  })
})

// get individual todo
router.get("/api/todos/:todoId", (req, res) => {
  Todo.findById(req.params.todoId, (err, foundTodo) => {
    res.json(foundTodo)
  })
})

// create new todo
router.post("/api/todos", (req, res) => {
  Todo.create(req.body, (err, newTodo) => {
    res.json(newTodo)
  })
})

// update todo 
router.put("/api/todos/:todoId", (req, res) => {
  Todo.findByIdAndUpdate(req.params.todoId, req.body, {new: true}, (err, updatedTodo) => {
    res.json(updatedTodo)
  })
})

// delete todo 
router.delete("/api/todos/:todoId", (req, res) => {
  Todo.findByIdAndRemove(req.params.todoId, (err, deletedTodo) => {
    res.json(deletedTodo)
  })
})

module.exports = router