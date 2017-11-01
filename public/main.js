$('.done').on('click', function (e) {
  const taskId = $(this).data('id')
  const data = { taskId }
  const $taskLine = $(this).closest('.task-line')

  $.ajax({
    url: '/tasks',
    type: 'PUT',
    data: data })
      .then(() => {
        $taskLine.remove()
      })
})

$('.delete').on('click', function (e) {
  const taskId = $(this).data('id')
  const data = { taskId }
  const $taskLine = $(this).closest('.task-line')

  $.ajax({
    url: '/tasks',
    type: 'DELETE',
    data: data
  })
    .then(() => {
      $taskLine.remove()
    })
})

$('.allDone').on('click', function (e) {
  const $list = $('.list')

  $.ajax({
    url: '/all-done',
    type: 'PUT'
  })
  .then(() => {
    $list.html('Congratulations!!! <br> You have done all your tasks')
  })
})

$('.deleteAll').on('click', function (e) {
  const $completedList = $('.completedList')

  $.ajax({
    url: '/completed',
    type: 'DELETE'
  })
  .then(() => {
    $completedList.html('No tasks')
  })
})

$('.edit').on('click', function(e) {
  e.preventDefault()
  const taskId = $(this).data('id')
  var taskTitle = $(this).prev('.taskTitleForEdit').text()
  var taskInput = '<input type="text" value="' + taskTitle + '" autofocus="true" name="editTaskTitle"/><button id="save" class="btn-primary btn">Save</button>'
  const $taskTitle = $(this).parent('.taskTitle')
  $(this).parent('.taskTitle').html(taskInput)
 
  $('#save').on('click', function (e) {
    var newTaskTitle = $(this).prev('input').val()
    const data = { taskId, newTaskTitle }
    $.ajax({
      url: '/edit',
      type: 'PUT',
      data: data
    })
  .then(() => {
    $taskTitle.html(newTaskTitle)
  })
  })
})
