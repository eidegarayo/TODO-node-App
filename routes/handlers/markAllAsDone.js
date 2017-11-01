const { reWriteTasksList, markAllTasksAsDone } = require('../../services/tasks')

function markAllAsDone (req, res) {
  markAllTasksAsDone()
  reWriteTasksList()
  res.status(200).send(`all tasks marked as done succesfully`)
}

module.exports = markAllAsDone
