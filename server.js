const express = require('express');
const path = require('path');
const router = require('./router')

const app = express()

// default olarak views directory'sini arar
app.set('view engine', 'ejs')
// değiştirmek için
// app.set('views', 'mydirectory')

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(router)
app.listen(PORT, () => console.log('listening on port ' + PORT))