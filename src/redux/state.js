import { renderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'you', likesCount: 5 },
            { id: 2, message: 'dry', likesCount: 26 },
            { id: 3, message: 'hi', likesCount: 7 },],
        newPostText: 'faradenza',

    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your name?' },
            { id: 3, message: 'Yo' },],
        newMessageText: 'Enter text',
        dialogs: [
            { id: 1, name: 'Olya Vladimirova' },
            { id: 2, name: 'Yliya Hachaturian' },
            { id: 3, name: 'Valera' },
            { id: 4, name: 'Igor' },
            { id: 5, name: 'Evgeniy' },
            { id: 6, name: 'gopa gopovna' },],
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    renderEntireTree(state);
}
export default state;
