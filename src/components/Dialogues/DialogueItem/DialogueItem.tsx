import React from 'react';
import classes from "../Dialogues.module.css";
import {NavLink} from "react-router-dom";


type DialogueItemType = {
    name: string
    id: number
}

const DialogueItem =(props: DialogueItemType)=> {
    let path = "/dialogues/" + props.id;
    return(
        <div className={`${classes.dialogue} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogueItem;