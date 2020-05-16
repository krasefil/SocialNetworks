const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Olya Vladimirova' },
        { id: 2, name: 'Yliya Hachaturian' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Igor' },
        { id: 5, name: 'Evgeniy' },
        { id: 6, name: 'gopa gopovna' },],
    newMessageText: '',
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your name?' },
        { id: 3, message: 'Yo' },],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;