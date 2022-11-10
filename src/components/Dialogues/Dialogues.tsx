import classes from'./Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {DialoguesDataType} from "../../index";
import {MessageDataType} from "../../index";



let Dialogues=(props: DialoguesDataType & MessageDataType)=>{

    //dialoguesData mapping
    let dialoguesElements = props.dialoguesData
        .map(d => <DialogueItem name={d.name} id={d.id}/>);

    //messageData mapping
    let messageElements = props.messageData
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