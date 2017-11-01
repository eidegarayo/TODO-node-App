const { markTaskAsDone, reWriteTasksList } = require('../../services/tasks')

function markAsDone (req, res) {
  const { taskId } = req.body
  markTaskAsDone(taskId)
  reWriteTasksList()
  res.status(200).send(`task w/ id ${taskId} has been removed succesfully`)
}

module.exports = markAsDone
