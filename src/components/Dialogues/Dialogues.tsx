import classes from'./Dialogues.module.css'
import {NavLink} from "react-router-dom";

const Dialogues=()=>{
    return(
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <div className={`${classes.dialogue} ${classes.active}`}>
                    <NavLink to="/dialogue/1">Andrei</NavLink>
                </div>
                <div className={classes.dialogue + ' ' + classes.active}>
                    <NavLink to="/dialogue/2">Delia</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to="/dialogue/3">Natalia</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to="/dialogue/4">Dorian</NavLink>
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