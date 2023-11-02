import styles from './PostFormChecker.module.css';

export const PostFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div className={styles.textarea_box}>
      {input.value.length > 50 && (
        <div className={`${styles.error_message}`}>{meta.warning}</div>
      )}
      <textarea
        {...input}
        name=""
        id=""
        cols={36}
        rows={4}
        placeholder={placeholder}
        className={`${styles.post_textarea} ${
          input.value.length > 50 && styles.post_textarea_error
        }`}
      />
    </div>
  );
};
