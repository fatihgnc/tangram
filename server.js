const express = require('express');
const path = require('path');
const fs = require('fs');

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

app.get('/levels', (req, res) => {
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
            { href: '/levels', text: 'oyna' },
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
            { href: '/levels', text: 'oyna' }
        ]    
    })
})

app.get('/play', (req, res) => {
    
    let level = req.query.level
    let piecesFolder = `./public/images/targets/pieces/${level}/`
    let pieces = []

    // getting file names from the pieces folder
    fs.readdirSync(piecesFolder)
        .forEach(piece => {
            piece = `/images/targets/pieces/${level}/` + piece
            pieces.push(piece)
        })

    res.render('play', {
        title: `Play - ${req.query.level}`,
        menu: [
            { href: '/', text: 'ana sayfa' },
            { href: '/levels', text: 'oyna' },
            { href: '/help', text: 'yardım' }
        ],
        targetPic: `${level}.png`,
        pieces   
    })
    
    
})

app.listen(PORT, () => console.log('listening on port ' + PORT))