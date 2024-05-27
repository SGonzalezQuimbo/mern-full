const Task = require('../models/task.model');

const getAllTasksHandler = async (req, res) => {
    try {
        const allTasks = await Task.find({
            user: req.user.id
        }).populate('user'); //el metodo populate me trae tambien la info del modelo user en este caso que esta relacionado a esta task.
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getTaskByIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const taskById = await Task.findById(id).populate('user');
        res.status(200).json(taskById);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createTaskHandler = async (req, res) => {
    try {
        const {title, description, date} = req.body;
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id,
        });
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

const updateTaskHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const taskUpdated = await Task.findByIdAndUpdate(id, req.body, {new: true}); //con la opcion new: true hago que me devuelva el dato nuevo actualizado ya que sin esta opcion por defecto me retorna el dato anterior(sin modificar).
        res.status(200).json(taskUpdated);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

const deleteTaskHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const taskDeleted = await Task.findByIdAndDelete(id);
        res.status(200).json(taskDeleted);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = {
    getAllTasksHandler,
    getTaskByIdHandler,
    createTaskHandler,
    updateTaskHandler,
    deleteTaskHandler
};