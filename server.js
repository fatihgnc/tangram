const express = require('express');
const path = require('path');

const app = express()

// default olarak views directory'sini arar
app.set('view engine', 'ejs')
// değiştirmek için
// app.set('views', 'mydirectory')

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})

app.get('/play', (req, res) => {
    res.send('game')
})

app.get('/developers', (req, res) => {
    res.send('developers')
})

app.get('/help', (req, res) => {
    res.send('help')
})

app.listen(PORT, () => console.log('listening on port ' + PORT))