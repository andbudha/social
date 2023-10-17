import styles from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {
  isEmailValid,
  requiredFieldValue,
} from '../../utils/form_validators/login_validators';
import { LoginPasswordFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginPasswordFormChecker';
import { LoginEmailFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginEmailFormChecker';
import { connect } from 'react-redux';
import { loginTC } from '../../redux/auth-reducer';
import { LoginDataType } from '../../types/store-types';
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login: React.FC<LoginContainerPropsType> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
    props.loginThunk(formData);
  };

  if (props.isAuthorised) {
    return <Redirect to={'/profile'} />;
  }
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
            name={'email'}
            type={'email'}
            component={LoginEmailFormChecker}
            validate={[requiredFieldValue, isEmailValid]}
          />
        </div>
        <div>
          <Field
            placeholder={'password'}
            name={'password'}
            type={'password'}
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
        {props.error && (
          <div className={styles.login_server_error}>{props.error}</div>
        )}
        <div className={styles.login_btn_box}>
          <button className={styles.login_btn}>Login</button>
        </div>
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm);

type LoginContainerPropsType = MapDispatchToPropsType & mapStateToPropsType;
type mapStateToPropsType = {
  isAuthorised: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    isAuthorised: state.authorisation.isAuthorised,
  };
};
type MapDispatchToPropsType = {
  loginThunk: (loginData: LoginDataType) => void;
};
const mapDispatchToProps = (
  dispatch: AppDispatchType
): MapDispatchToPropsType => {
  return {
    loginThunk: (loginData: LoginDataType) => {
      dispatch(loginTC(loginData));
    },
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
