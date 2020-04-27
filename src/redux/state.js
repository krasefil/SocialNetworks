import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar =  sidebarReducer( this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
}

export default store;

