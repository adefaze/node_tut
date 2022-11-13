
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome home')
    }
    if (req.url === '/about') {
        res.end('welcoem to about')
    }
    res.end(`error page `)
})