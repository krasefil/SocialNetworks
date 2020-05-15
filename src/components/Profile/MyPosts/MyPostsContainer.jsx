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
const myDispatchToPost = (dispatch) => {
  return {
    updateNewPostText: () => {
      dispatch(addPostActionCreator());
    },
    addPost: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(myStateToPost, myDispatchToPost)(MyPosts);

export default MyPostsContainer;