import styles from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { LoginNameFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginNameFormChecker';
import {
  loginNameLength15,
  maxPasswordLength8,
  minPasswordLength3,
  requiredFieldValue,
} from '../../utils/form_validators/login_validators';
import { LoginPasswordFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginPasswordFormChecker';

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
            validate={[requiredFieldValue, loginNameLength15]}
          />
        </div>
        <div>
          <Field
            placeholder={'password'}
            name={'password'}
            component={LoginPasswordFormChecker}
            validate={[
              requiredFieldValue,
              minPasswordLength3,
              maxPasswordLength8,
            ]}
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
