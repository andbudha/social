import classes from'./Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {RootStateType} from "../../redux/state";

type DialoguesPropsType = {
    state: RootStateType
}

const Dialogues=(props: DialoguesPropsType)=>{

    //dialogueData mapping
    let dialoguesElements = props.state.messagePage.dialogues
        .map(d => <DialogueItem name={d.name} id={d.id}/>);

    //messageData mapping
    let messageElements = props.state.messagePage.messages
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