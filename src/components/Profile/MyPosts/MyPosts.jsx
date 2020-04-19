import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.posts.map(props => < Post id={props.id} message={props.message} like={props.likesCount} />);

  return (
    <div className={c.postsBlock}>
      <h2>My postот      </h2>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="2"></textarea>
        </div>

        <button>Add post</button>
      </div>
      <div className={c.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;