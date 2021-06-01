const express = require('express');
const router = express.Router()
const fs = require('fs');

// home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})

// levels page
router.get('/levels', (req, res) => {
    res.render('levels', {
        title: 'Choose Level',
        menu: [
            { href: '/', text: 'ana sayfa' },
            { href: '/developers', text: 'geliştiriciler' },
            { href: '/help', text: 'yardım' }
        ]   
    })
})

// developers page
router.get('/developers', (req, res) => {
    res.render('developers', { 
        title: 'Developers',
        menu: [
            { href: '/', text: 'ana sayfa' },
            { href: '/levels', text: 'oyna' },
            { href: '/help', text: 'yardım' }
        ]   
    })
})

// help page
router.get('/help', (req, res) => {
    res.render('help', { 
        title: 'Help',
        menu: [
            { href: '/', text: 'ana sayfa' },
            { href: '/developers', text: 'geliştiriciler' },
            { href: '/levels', text: 'oyna' }
        ]    
    })
})

// play page
router.get('/play', (req, res) => {
    
    let level = req.query.level
    let piecesFolder = `./public/images/targets/pieces/${level}/`
    let pieces = []

    // getting file names from the pieces folder
    fs.readdirSync(piecesFolder)
        .forEach(piece => {
            piece = `/images/targets/pieces/${level}/` + piece
            pieces.push(piece)
        })

    // passing all required info to view
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

// sending 404
router.all('*', (req, res) => {
    res.status(404).send('404 Not Found')
})

module.exports = router
