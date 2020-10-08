const express = require('express');
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res)=> {
    res.json({
        success:true,
    });
});

app.listen(port,() =>{
    console.log('server success!!')
});