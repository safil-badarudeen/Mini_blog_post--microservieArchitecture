import React from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "rejected") {
       content = " This comment is banned";
    }

    if (comment.status === "pending") {
       content = "This comment waiting for approval";
    }

    if (comment.status === "approved") {
       content = comment.content; 
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
