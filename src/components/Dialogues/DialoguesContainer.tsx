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
  isAuthorised?: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    participants: state.dialogues.participants,
    messages: state.dialogues.messages,
    newMessageText: state.dialogues.newMessageText,
    isAuthorised: state.authorisation.isAuthorised,
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
