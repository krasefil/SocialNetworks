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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;
