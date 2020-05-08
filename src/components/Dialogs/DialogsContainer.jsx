import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (message) => {
        let action = updateNewMessageTextActionCreator(message)
        props.store.dispatch(action);

    };

    return <Dialogs
        addMessage={addMessage}
        onMessageChange={onMessageChange}
        messages={state.messages}
        newMessageText={state.newMessageText}
        dialogs={state.dialogs} />

}

export default DialogsContainer;