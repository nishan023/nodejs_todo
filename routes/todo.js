const express = require("express");
const router = express.Router();
const crypto = require("crypto");

let todo = [
  {
    id: 1,
    title: "item no: 1",
    status: "completed",
  },
  {
    id: 2,
    title: "item no: 2",
    status: "completed",
  },
  {
    id: 3,
    title: "item no: 3",
    status: "completed",
  },
];

//GET
router.get("/api/todos/", (req, res) => {
  return res.status(200).json(todo);
});

//Get todos by id
router.get("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const check = todo.find((user) => user.id == id);
  return res.json(check);
});

//POST new todo
router.post("/api/todos/", (req, res, next) => {
  let idForNewItem = crypto.randomUUID();
  newTodo = [
    {
      id: todo.length + 1,
      title: "new item",
      status: "ongoing",
    },
  ];

  todo.push(newTodo);
  return res.status(200).json(todo);
});

//UPDATE todos by put
router.put("/api/todos/:id", (req, res, next) => {
  todo = todo.map((todo) => {
    if (todo.id == req.params.id) {
      return {
        id: crypto.randomUUID(),
        title: "New title via put",
        status: "Pending ",
      };
    } else return todo;
  });

  return res.status(200).json(todo);
});

//UPDATE todos by patch
router.patch("/api/todos/:id", (req, res, next) => {
  const id = req.params.id;
  const todoUpdates = todo.find((item) => item.id == id);
  todoUpdates.title = "UPDATED via patch";
  todoUpdates.status = "Just updated";
  todo = todo.map((todo) => {
    if (todo.id === id) return todoUpdates;
    else return todo;
  });
  return res.status(200).json(todo);
});

//DELETE todo by id
router.delete("/api/todos/:id", (req, res, next) => {
  const idToDelete = req.params.id;
  todo = todo.filter((itemId) => {
    if (itemId.id != idToDelete) return todo;
  });

  return res.status(200).json(todo);
});

module.exports = router;
