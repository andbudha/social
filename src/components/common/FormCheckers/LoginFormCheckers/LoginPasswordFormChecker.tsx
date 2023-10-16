import styles from './LoginPasswordFormChecker.module.css';

export const LoginPasswordFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div>
      <div
        className={`
      ${meta.error && styles.login_password_input_error}`}
      >
        {!meta.active && meta.touched && meta.error}
      </div>
      <div>
        <input
          {...input}
          placeholder={placeholder}
          className={`
        ${styles.login_password_input}
        ${
          !input.value.length &&
          !meta.active &&
          meta.touched &&
          styles.login_password_input_touched
        } 
        `}
        />
      </div>
    </div>
  );
};
