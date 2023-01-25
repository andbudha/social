import React from 'react';
import classes from "../Dialogues.module.css";

type MessageType = {
    message: string
    id: number
}

const Message =(props: MessageType)=> {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

export default Message;