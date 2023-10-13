import { MessageType, ParticipantType } from '../../types/store-types';
import { Dialogues } from './Dialogues';
import { addMessageAC } from '../../redux/dialogue-reducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';

type mapStateToPropsType = {
  participants: ParticipantType[];
  messages: MessageType[];
  isAuthorised?: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    participants: state.dialogues.participants,
    messages: state.dialogues.messages,
    isAuthorised: state.authorisation.isAuthorised,
  };
};

type MapDispatchPropsType = {
  addMessage: (newMessage: string) => void;
};

export type DialoguesConainerPropsType = MapDispatchPropsType &
  mapStateToPropsType;
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addMessage: (newMessage: string) => {
      dispatch(addMessageAC(newMessage));
    },
  };
};

export const DialogueContainer = withAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(Dialogues)
);
