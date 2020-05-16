import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const myStateToPost = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      updateNewPostText: (text) => {
          let action = updateNewPostTextActionCreator(text);
          dispatch(action);
      },
      addPost: () => {
          dispatch(addPostActionCreator());
      }
  }
}
const MyPostsContainer = connect(myStateToPost, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;