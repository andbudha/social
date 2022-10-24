import classes from'./Dialogues.module.css'
import {NavLink} from "react-router-dom";


//DialogueItem Component
type DialogueItemType = {
    name: string
    id: number
}

const DialogueItem =(props: DialogueItemType)=> {
    let path = "/dialogue/" + props.id;
    return(
        <div className={`${classes.dialogue} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

//MessageComponent
type MessageType = {
    message: string
}

const Message =(props: MessageType)=> {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogues=()=>{
    return(
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <DialogueItem name={'Andrei'} id={1}/>
                <DialogueItem name={'Delia'} id={2}/>
                <DialogueItem name={'Natalia'} id={3}/>
                <DialogueItem name={'Dorian'} id={4}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Are you free today?'}/>
            </div>
        </div>
    );
}

export default Dialogues;