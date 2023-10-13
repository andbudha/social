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
      <form onSubmit={props.handleSubmit}>
        <Field
          placeholder={'your message'}
          component={'textarea'}
          name={'message'}
        />
        <button className={styles.msg_button}>add message</button>
      </form>
    </div>
  );
};
const ReduxForm = reduxForm<FormDataType>({
  form: 'message',
})(Form);
