import styles from './PostFormChecker.module.css';

export const PostFormChecker = (props: any) => {
  return (
    <div>
      <textarea
        {...props.input}
        name=""
        id=""
        cols={25}
        rows={4}
        placeholder={props.placeholder}
        className={`${props.meta.touched && styles.touched_textarea} ${
          styles.post_textarea
        }`}
      />
      <div className={`${styles.eror_msg}`}>{props.meta.error}</div>
    </div>
  );
};
