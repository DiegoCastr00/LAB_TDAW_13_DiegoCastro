const express = require('express');
const tasksController = require('../controllers/TaskController');
const router = express.Router();

router.get('/tasks', tasksController.option);
router.get('/create', tasksController.create);
router.post('/create', tasksController.store);
router.post('/tasks/delete', tasksController.destroy);
router.get('/tasks/edit/:id', tasksController.edit);
router.post('/tasks/edit/:id', tasksController.update);

module.exports = router;

