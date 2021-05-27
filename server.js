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

app.get('/choose-level', (req, res) => {
    res.render('levels', {
        title: 'Choose Level',
        menu: [
            { href: '/', text: 'ana sayfa' },
            { href: '/developers', text: 'geliştiriciler' },
            { href: '/help', text: 'yardım' }
        ]   
    })
})

app.get('/developers', (req, res) => {
    res.render('developers', { 
        title: 'Developers',
        menu: [
            { href: '/', text: 'ana sayfa' },
            { href: '/choose-leve', text: 'oyna' },
            { href: '/help', text: 'yardım' }
        ]   
    })
})

app.get('/help', (req, res) => {
    res.render('help', { 
        title: 'Help',
        menu: [
            { href: '/', text: 'ana sayfa' },
            { href: '/developers', text: 'geliştiriciler' },
            { href: '/choose-level', text: 'oyna' }
        ]    
    })
})

app.listen(PORT, () => console.log('listening on port ' + PORT))