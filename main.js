const express = require('express');
const app = express();
const userImport  = require('./routes/todo');
const port = 3000;

//middleware

app.use('/', userImport);
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})