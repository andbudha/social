import { InjectedFormProps } from 'redux-form';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC<InjectedFormProps> = () => {
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
