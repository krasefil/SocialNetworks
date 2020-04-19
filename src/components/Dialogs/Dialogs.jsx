import React from 'react';
import c from './Dialogs.module.css';
import DialodItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
    

    let dialogsElement = props.state.dialogs.map( props => < DialodItem id={props.id} name={props.name} />);
    let messagesElement = props.state.messages.map( props => < Message id={props.id} message={props.message} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
        </div>
    )

}

export default Dialogs;