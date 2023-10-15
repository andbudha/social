import styles from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { LoginNameFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginNameFormChecker';
import {
  loginLength15,
  requiredFieldValue,
} from '../../utils/form_validators/login_validators';

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
            placeholder={'login-name'}
            name={'login'}
            component={LoginNameFormChecker}
            validate={[requiredFieldValue, loginLength15]}
          />
        </div>
        <div>
          <Field
            placeholder={'password'}
            name={'password'}
            component={'input'}
            validate={[requiredFieldValue]}
          />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
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
