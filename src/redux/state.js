const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

export default store;
window.store = store;
