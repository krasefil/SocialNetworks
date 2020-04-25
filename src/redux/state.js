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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }

    },
}

export default store;
window.store = store;
