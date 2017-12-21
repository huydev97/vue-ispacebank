var express = require('express')
var path = require('path')
var http = require('http')
var logger = require('morgan')
var debug = require('debug')('abc:server')

var app = express()
app.use(logger('dev'))
console.log(path.join(__dirname,'..', 'dist'))
app.use(express.static(path.join(__dirname, '..','dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

var port = process.env.PORT || 80
app.set('port', port)

var server = http.createServer(app)
server.listen(port)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    console.log('Server production: http://localhost:' + port)
}

