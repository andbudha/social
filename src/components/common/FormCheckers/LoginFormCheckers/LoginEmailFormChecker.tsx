import styles from './LoginEmailFormChecker.module.css';

export const LoginEmailFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div>
      <div
        className={`
      ${meta.error && styles.login_email_input_error}`}
      >
        {!meta.active && meta.touched && meta.error}
      </div>
      <div>
        <input
          {...input}
          placeholder={placeholder}
          className={`
        ${styles.login_email_input}
        ${
          !input.value.length &&
          !meta.active &&
          meta.touched &&
          styles.login_email_input_touched
        } 
        ${
          meta.error === 'Invalid email address' &&
          styles.login_email_input_touched
        }
        `}
        />
      </div>
    </div>
  );
};
