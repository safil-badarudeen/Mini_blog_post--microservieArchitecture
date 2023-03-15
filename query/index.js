const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express()


app.use(bodyParser.json());
app.use(cors())

const posts = {};


app.post('/events',(req,res)=>{
    const {type,data} = req.body;
    if (type === 'PostCreated'){
        const {id,title} = data;
        posts[id]={id,title , comments:[]};
    }

    if (type === 'CommentCreated'){
      const {id, content, postId} = data;
      
      const post = post[postId];
      post.comments.push({id, content});

    }

    res.send({});
})

app.get('/posts',(req,res)=>{
   res.send(posts)
})

app.listen(4002,()=>{
    console.log("server listening to port 4002...")
})