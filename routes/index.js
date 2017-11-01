const express = require('express')
const showHome = require('./handlers/showHome')
const showPendingTasks = require('./handlers/showPendingTasks')
const addNewTask = require('./handlers/addNewTask')
const showCompletedTasks = require('./handlers/showCompletedTasks')
const markAsDone = require('./handlers/markAsDone')
const deleteTask = require('./handlers/deleteTask')
const markAllAsDone = require('./handlers/markAllAsDone')
const deleteCompletedTasks = require('./handlers/deleteCompletedTasks')
const editTask = require('./handlers/editTask')

const router = express.Router()

router.get('/', showHome)
router.get('/tasks/todo', showPendingTasks)

router.route('/tasks')
  .post(addNewTask)
  .put(markAsDone)
  .delete(deleteTask)

router.put('/edit', editTask)

router.put('/all-done', markAllAsDone)

router.route('/completed')
  .get(showCompletedTasks)
  .delete(deleteCompletedTasks)

module.exports = router
