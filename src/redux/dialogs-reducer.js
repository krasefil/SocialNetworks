const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

export default dialogsReducer;