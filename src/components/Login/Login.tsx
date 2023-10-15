import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { LoginNameFormChecker } from '../common/FormCheckers/LoginFormCheckers/LoginNameFormChecker';
import {
  loginLength15,
  maxLoginNameLength,
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
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'login-name'}
            name={'login'}
            component={LoginNameFormChecker}
            validate={[requiredFieldValue, maxLoginNameLength]}
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
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm);
