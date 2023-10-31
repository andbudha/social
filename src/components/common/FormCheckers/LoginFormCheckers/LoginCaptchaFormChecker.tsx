import styles from './LoginCaptchaFormChecker.module.css';

export const LoginCaptchaFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div>
      <div
        className={`
      ${meta.error && styles.login_captcha_input_error} `}
      >
        {!meta.active && meta.touched && meta.error}
      </div>
      <div>
        <input
          {...input}
          placeholder={placeholder}
          className={`
        ${styles.login_captcha_input}
        ${
          !input.value.length &&
          !meta.active &&
          meta.touched &&
          styles.login_captcha_input_touched
        } 
        `}
        />
      </div>
    </div>
  );
};
