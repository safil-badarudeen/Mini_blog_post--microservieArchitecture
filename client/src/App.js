import React from 'react'
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Heading Rater</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
