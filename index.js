const express = require('express')
const routes = require('./routes')
// body-parser -> para recoger post en req.body
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(3000)
console.log('Listening on PORT 3000...')
