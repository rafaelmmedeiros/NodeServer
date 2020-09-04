let express = require('express')

let app = express()
let port = 3000

app.listen(port, function(){
    console.log('Server is Running!!! And isn´t burning!! port:', port)
})

app.get('/',function(req, res) {
    let page = '<html><body><h1>Initial Page from Web System Development</h1></body></html>'
    res.send(page)
})

app.get('/notes',function(req, res) {
    let page = '<html><body><h1>Avaliations Page12</h1></body></html>'
    res.send(page)
})