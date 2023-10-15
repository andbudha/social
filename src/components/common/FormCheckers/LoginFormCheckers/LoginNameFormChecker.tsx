import styles from './LoginNameFormChecker.module.css';

export const LoginNameFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div>
      <input
        {...input}
        placeholder={placeholder}
        className={`${styles.login_name_input} ${
          input.value.length > 15 && styles.message_textarea_error
        }`}
      />
      {input.value.length > 150 && (
        <div className={`${styles.error_message}`}>{meta.warning}</div>
      )}
    </div>
  );
};
