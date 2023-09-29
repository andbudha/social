import { MessageType, ParticipantType } from '../../types/store-types';
import { Dialogues } from './Dialogues';
import {
  addMessageAC,
  updateMessageTextAC,
} from '../../redux/dialogue-reducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';

type mapStateToPropsType = {
  participants: ParticipantType[];
  messages: MessageType[];
  newMessageText: string;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
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

export type DialoguesConainerPropsType = MapDispatchPropsType &
  mapStateToPropsType;
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateMessageValue: (newMessageValue: string) => {
      dispatch(updateMessageTextAC(newMessageValue));
    },
    addMessage: () => {
      dispatch(addMessageAC());
    },
  };
};
export const DialogueContainer = connect(
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
