const { deleteAllCompletedTasks, reWriteTasksList } = require('../../services/tasks')

function deleteCompletedTasks (req, res) {
  deleteAllCompletedTasks()
  reWriteTasksList()
  res.status(200).send(`all tasks have been removed succesfully`)
}

module.exports = deleteCompletedTasks
