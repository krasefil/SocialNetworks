import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGbAA_18Dm-mhYJNK-P2-WcGLFAREJySIo-3UaR9YwGUBTSDZw&usqp=CAU" alt="" />
      {props.message}
      <div>
        <span>
          {props.like}
        </span>
      </div>
    </div>
  )
}

export default Post;