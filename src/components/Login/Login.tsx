import styles from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {
  isEmailValid,
  requiredFieldValue,
} from '../../utils/form_validators/login_validators';
import { LoginPasswordFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginPasswordFormChecker';
import { LoginEmailFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginEmailFormChecker';
import { connect } from 'react-redux';

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };
  return (
    <div className={styles.login_page}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div className={styles.login_box}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'email'}
            name={'login'}
            component={LoginEmailFormChecker}
            validate={[requiredFieldValue, isEmailValid]}
          />
        </div>
        <div>
          <Field
            placeholder={'password'}
            name={'password'}
            component={LoginPasswordFormChecker}
            validate={[requiredFieldValue]}
          />
        </div>
        <div className={styles.login_checkbox_container}>
          <Field
            className={styles.checkbox}
            type={'checkbox'}
            name={'rememberMe'}
            component={'input'}
          />
          Remeber me
        </div>
        <div className={styles.login_btn_box}>
          <button className={styles.login_btn}>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm);

export const LoginContainer = connect()(Login);
