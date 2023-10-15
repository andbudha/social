import styles from './LoginNameFormChecker.module.css';

export const LoginNameFormChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  console.log(meta);

  return (
    <div>
      <div
        className={`
      ${meta.error && styles.login_name_input_error}`}
      >
        {(!meta.active && meta.touched && meta.error) ||
          (input.value.length > 15 && meta.error)}
      </div>
      <div>
        <input
          {...input}
          placeholder={placeholder}
          className={`
        ${styles.login_name_input}
        ${
          (!input.value.length &&
            !meta.active &&
            meta.touched &&
            styles.login_name_input_touched) ||
          (input.value.length > 15 && styles.login_name_input_touched)
        } 
        `}
        />
      </div>
    </div>
  );
};
