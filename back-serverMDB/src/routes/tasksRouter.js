const {Router} = require('express');
const authRequired = require('../middlewares/validateUserToken');
const { getAllTasksHandler, getTaskByIdHandler, createTaskHandler, updateTaskHandler, deleteTaskHandler } = require('../handlers/task.handler');

const tasksRouter = Router();

tasksRouter.get("/tasks", authRequired, getAllTasksHandler);

tasksRouter.get("/tasks/:id", authRequired, getTaskByIdHandler);

tasksRouter.post("/tasks", authRequired, createTaskHandler);

tasksRouter.put("/tasks/:id", authRequired, updateTaskHandler);

tasksRouter.delete("tasks/:id", authRequired, deleteTaskHandler);



module.exports = tasksRouter;