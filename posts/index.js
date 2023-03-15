const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors')

const app = express();
const PORT= 4000;

app.use(bodyParser.json())
app.use(cors())

let posts ={};


app.get('/posts', (req, res)=>{
  res.send(posts)
})

app.post('/posts',(req, res)=>{
    const id = randomBytes(4).toString('hex');
    const {title}= req.body

    posts[id] ={
        id, title
    };

    res.send(posts)
})
app.listen(PORT,()=>{
    console.log("listening to port 4000")
})