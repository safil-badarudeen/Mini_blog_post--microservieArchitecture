const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const cors = require('cors')


const app = express()


app.use(bodyParser.json());
app.use(cors())

let posts = {};

const handleEvent = (data, type)=>{
    if (type === 'PostCreated'){
        const {id,title} = data;
        posts[id]={id,title , comments:[]};
    }

    if (type === 'CommentCreated'){
      const {id, content, postId ,status} = data;
      
      const post = posts[postId];
      post.comments.push({id, content,status});

    }

    if (type === 'CommentUpdated'){
        const {id, content , postId, status} = data;
        const post = posts[postId];
        const comment = post.comments.find(comment =>{
            return comment.id === id;
        })

        comment.status= status;
        comment.content= content;
    }
}

app.post('/events',(req,res)=>{
    const {type,data} = req.body;
   handleEvent(data , type)
    console.log(posts) 
    res.send({});
})

app.get('/posts',(req,res)=>{
   res.send(posts)
})

app.listen(4002, async ()=>{
    console.log("server listening to port 4002...")
 const res = await axios.get('http://localhost:4005/events');

 for (let event of res.data){
    console.log('Processing event: ', event.type);
    handleEvent(event.type, event.data)
 }

})