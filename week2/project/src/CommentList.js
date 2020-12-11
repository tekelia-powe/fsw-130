import React, {useState,useContext} from 'react';
import Comment from './Comment'
import {AppContext} from './AppContext'

    const CommentList = () => {
      const {value, value2} = useContext(AppContext);
      const [items, setItems] = value;
      const [comments, setComments] = value2;
//      const id = items.id
  return (
    <div>
       <label> Commments</label>
       {comments.map(comment => (
           <Comment key={comment.id} id={comment.id} comment={comment.comment} />
       ))}
    </div>
  );
};

export default CommentList;