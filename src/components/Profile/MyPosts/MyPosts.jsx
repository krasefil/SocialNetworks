import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.posts.map(props => < Post id={props.id} message={props.message} like={props.likesCount} />);
 
  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea cols="30" rows="2" ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        </div>

        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={c.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;