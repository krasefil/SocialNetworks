import React from 'react';
import c from './Dialogs.module.css';
import DialodItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => < DialodItem id={d.id} name={d.name} key={d.id} />);
    let messagesElement = state.messages.map(m => < Message id={m.id} message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                <div><textarea cols="40" rows="2" value={newMessageBody} onChange={onMessageChange} placeholder='Enter your message'> </textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
           

        </div>
    )

}

export default Dialogs;