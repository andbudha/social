import classes from'./Dialogues.module.css'

const Dialogues=()=>{
    return(
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <div className={`${classes.dialogue} ${classes.active}`}>
                    Andrei
                </div>
                <div className={classes.dialogue + ' ' + classes.active}>
                    Delia
                </div>
                <div className={classes.dialogue}>
                    Natalia
                </div>
                <div className={classes.dialogue}>
                    Dorian
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi
                </div>
                <div className={classes.message}>
                    How are you?
                </div>
                <div className={classes.message}>
                    Are you free today?
                </div>
            </div>
        </div>
    );
}

export default Dialogues;