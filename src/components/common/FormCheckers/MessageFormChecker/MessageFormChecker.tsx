import styles from './MessageFormChecker.module.css';

export const MessageFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  console.log(props);

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
