const { getDoneTasks } = require('../../services/tasks')

function showCompletedTasks (req, res) {
  const title = 'TO DO Completed list'
  let tasks = getDoneTasks()
  res.render('completedList.pug', { title, tasks })
}

module.exports = showCompletedTasks
