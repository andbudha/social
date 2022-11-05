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
const Dialogues=()=>{

    let dialoguesData = [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Delia'},
        {id: 3, name: 'Natalia'},
        {id: 4, name: 'Dorian'}
    ]

    let messageData = [
        {id: 1, message: 'Hi...'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'Are you free today?'}
    ]

    return(
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <DialogueItem name={dialoguesData[0].name} id={dialoguesData[0].id}/>
                <DialogueItem name={dialoguesData[1].name} id={dialoguesData[1].id}/>
                <DialogueItem name={dialoguesData[2].name} id={dialoguesData[2].id}/>
                <DialogueItem name={dialoguesData[3].name} id={dialoguesData[3].id}/>
            </div>
            <div className={classes.messages}>
                <Message id={messageData[0].id} message={messageData[0].message}/>
                <Message id={messageData[1].id} message={messageData[1].message}/>
                <Message id={messageData[2].id} message={messageData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogues;