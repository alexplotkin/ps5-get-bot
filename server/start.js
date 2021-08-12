const cron = require('node-cron')

//execute every 1 min
cron.schedule('*/1 * * * *', function () {
  var shell = require('./child_helper')

  var commandList = [
    './bin/start.sh',
  ]

  shell.series(commandList, function (err) {
    console.log('done')
  })
})
