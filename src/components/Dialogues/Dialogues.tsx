import classes from'./Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";


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