import styles from './PostFormChecker.module.css';

export const PostFormChecker = ({
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
        cols={36}
        rows={4}
        placeholder={placeholder}
        className={`${styles.post_textarea} ${
          input.value.length > 100 && styles.post_textarea_error
        }`}
      />
      {input.value.length > 100 && (
        <div className={`${styles.error_message}`}>{meta.warning}</div>
      )}
    </div>
  );
};
