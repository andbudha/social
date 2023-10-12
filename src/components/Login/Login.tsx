import { InjectedFormProps } from 'redux-form';
import styles from './Login.module.css';

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export const LoginForm: React.FC<InjectedFormProps> = (props) => {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Login" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <div>
          <input type="checkbox" /> Remeber me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
