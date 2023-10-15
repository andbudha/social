import styles from './LoginPasswordFormChecker.module.css';

export const LoginPasswordFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div>
      <textarea
        {...input}
        name=""
        id=""
        cols={40}
        rows={4}
        placeholder={placeholder}
        className={`${styles.message_textarea} ${
          input.value.length > 150 && styles.message_textarea_error
        }`}
      />
      {input.value.length > 150 && (
        <div className={`${styles.error_message}`}>{meta.warning}</div>
      )}
    </div>
  );
};
