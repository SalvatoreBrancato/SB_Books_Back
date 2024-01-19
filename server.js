const express = require('express');
const bookRouter = require('./routers/bookRouter');

const app = express()

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', bookRouter);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})