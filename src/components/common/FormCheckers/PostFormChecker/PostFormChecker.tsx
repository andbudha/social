import styles from './PostFormChecker.module.css';

export const PostFormChecker = (props: any) => {
  console.log(props);

  return (
    <div>
      <textarea
        {...props.input}
        name=""
        id=""
        cols={30}
        rows={4}
        placeholder={props.placeholder}
        className={`${styles.post_textarea}`}
      />
      {props.input.value.length > 100 && (
        <div className={`${styles.eror_msg}`}>{props.meta.warning}</div>
      )}
    </div>
  );
};
