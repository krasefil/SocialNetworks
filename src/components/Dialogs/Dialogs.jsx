import React from 'react';
import c from './Dialogs.module.css';
import DialodItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
 debugger
    let dialogsElement = props.dialogs.map(props => < DialodItem id={props.id} name={props.name} />);
    let messagesElement = props.messages.map(props => < Message id={props.id} message={props.message} />);
    let newMessagesElement = React.createRef();
    
    let onAddMessage = () => {
        props.addMessage();
    };
    let onMessageChange = () => {
        let message = newMessagesElement.current.value;
        props.onMessageChange(message);
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
                <textarea cols="40" rows="2" ref={newMessagesElement} value={props.newMessageText} onChange={onMessageChange}></textarea>
                <button onClick={onAddMessage}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs;