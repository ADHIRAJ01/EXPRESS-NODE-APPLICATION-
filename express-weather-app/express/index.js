const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("hell bbo");
})

app.get('/form', (req, res) => {
    res.send(req.body);
})



app.listen(port,() => {
    console.log(`listening on ${port}`);
});