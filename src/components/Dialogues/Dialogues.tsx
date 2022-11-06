import classes from'./Dialogues.module.css'
import {NavLink} from "react-router-dom";


//subcomponents
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

//main component
let Dialogues=()=>{

    let dialoguesData = [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Delia'},
        {id: 3, name: 'Natalia'},
        {id: 4, name: 'Dorian'}
    ]
    //dialoguesData mapping
    let dialoguesElements = dialoguesData
        .map(d => <DialogueItem name={d.name} id={d.id}/>);

    let messageData = [
        {id: 1, message: 'Hi...'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you free today?'}
    ]

    //messageData mapping
    let messageElements = messageData
        .map(m=> <Message id={m.id} message={m.message}/>);

    return(
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                {dialoguesElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogues;