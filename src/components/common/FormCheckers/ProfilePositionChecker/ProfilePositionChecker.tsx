import styles from './ProfilePositionChecker.module.css';

export const ProfilePositionChecker = ({
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
      ${meta.error && styles.profile_position_input_error} `}
      >
        {input.value.length > 25 && meta.error}
      </div>
      <div>
        <input
          {...input}
          placeholder={placeholder}
          className={styles.profile_position_input}
        />
      </div>
    </div>
  );
};
