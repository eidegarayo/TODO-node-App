const { getNotDoneTasks } = require('../../services/tasks')

function showPendingTasks (req, res) {
  const title = 'TO DO list'
  let tasks = getNotDoneTasks()
  res.render('todo', { title, tasks })
}

module.exports = showPendingTasks
