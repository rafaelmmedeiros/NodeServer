let app = require('./config/server')

app.get('/',function(req, res) {
    res.render('home/home')
})

app.get('/notas', function(req, res) {
    res.render('notas/notas')
})