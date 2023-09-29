import { MessagePageType } from '../../types/store-types';
import { Dialogues } from './Dialogues';
import {
  addMessageAC,
  updateMessageTextAC,
} from '../../redux/dialogue-reducer';
import { connect } from 'react-redux';
import { ActionTypes } from '../../types/action-types';
import { AppRootStateType } from '../../redux/redux-store';

const mapStateToProps = (state: AppRootStateType): MessagePageType => {
  return {
    participants: state.dialogues.participants,
    messages: state.dialogues.messages,
    newMessageText: state.dialogues.newMessageText,
  };
};

type MapDispatchPropsType = {
  updateMessageValue: (newMessageValue: string) => void;
  addMessage: () => void;
};
const mapDispatchToProps = (
  dispatch: (action: ActionTypes) => void
): MapDispatchPropsType => {
  return {
    updateMessageValue: (newMessageValue: string) => {
      dispatch(updateMessageTextAC(newMessageValue));
    },
    addMessage: () => {
      dispatch(addMessageAC());
    },
  };
};
export const connectDialogueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogues);

//OLD CODE

// import { MessagePageType } from '../../types/store-types';
// import { Dialogues } from './Dialogues';
// import {
//   addMessageAC,
//   updateMessageTextAC,
// } from '../../redux/dialogue-reducer';
// import { ActionTypes } from '../../types/action-types';

// type DialoguesConainerPropsType = {
//   messagePage: MessagePageType;
//   newMessageText: string;
//   dispatch: (action: ActionTypes) => void;
// };
// export const DialoguesContainer: React.FC<DialoguesConainerPropsType> = (
//   props
// ) => {
//   //input value catching handler
//   const updateMessageValue = (newMessageValue: string) => {
//     props.dispatch(updateMessageTextAC(newMessageValue));
//   };
//   //message adding func
//   const addMessage = () => {
//     props.dispatch(addMessageAC());
//   };
//   return (
//     <div>
//       <Dialogues
//         messagePage={props.messagePage}
//         newMessageText={props.newMessageText}
//         updateMessageValue={updateMessageValue}
//         addMessage={addMessage}
//       />
//     </div>
//   );
// };
