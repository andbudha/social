import { messageLength150 } from '../../../utils/form_validators/message_validators';
import { MessageFormChecker } from '../../common/FormCheckers/MessageFormChecker/MessageFormChecker';
import styles from './AddNewMessageForm.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type addNewMessageFormPropsType = {
  addMessage: (newMessage: string) => void;
};

export const AddNewMessageForm: React.FC<addNewMessageFormPropsType> = (
  props
) => {
  const onSubmit = (messageData: FormDataType) => {
    props.addMessage(messageData.message);
  };
  return (
    <div>
      <ReduxForm onSubmit={onSubmit} />
    </div>
  );
};
type FormDataType = {
  message: string;
};
const Form: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div>
      <div>
        <form onSubmit={props.handleSubmit}>
          <Field
            placeholder={'your message'}
            component={MessageFormChecker}
            name={'message'}
            validate={[messageLength150]}
            warn={messageLength150}
          />
          <div>
            <button className={styles.msg_button}>add message</button>
          </div>
        </form>
      </div>
    </div>
  );
};
const ReduxForm = reduxForm<FormDataType>({
  form: 'message',
})(Form);
