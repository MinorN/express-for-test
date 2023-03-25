import express from 'express'
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('你好啊，我是app2.ts');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
