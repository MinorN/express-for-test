const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('你好啊')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
