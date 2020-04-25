import React from 'react';
import c from './Dialogs.module.css';
import DialodItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(props => < DialodItem id={props.id} name={props.name} />);
    let messagesElement = props.dialogsPage.messages.map(props => < Message id={props.id} message={props.message} />);
    let newMessagesElement = React.createRef();
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    };
    let onMessageChange = () => {
        let message = newMessagesElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message});
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
            <div className={c.newMessage}>
                <textarea cols="40" rows="2" ref={newMessagesElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs;