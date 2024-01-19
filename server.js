const express = require('express');
const bookRouter = require('./routers/bookRouter');
const cors = require('cors');


const app = express()

const port = 3000;

//abilito cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', bookRouter);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})