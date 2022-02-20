


const express = require('express');
const app = express();
const port = 5000



app.get('/', (req, res) => {
    res.json({success:"연결성공"})
})


app.listen(port || 5001, (req, res) => {
    console.log('port 번호 => ', port);
})