import styles from './ProfileNameChecker.module.css';

export const ProfileNameChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div>
      <div
        className={`
      ${meta.error && styles.profile_name_input_error} `}
      >
        {input.value.length > 25 && meta.error}
      </div>
      <div>
        <input
          {...input}
          placeholder={placeholder}
          className={`${styles.profile_name_input} ${
            meta.error && styles.input_background_color_error
          }`}
        />
      </div>
    </div>
  );
};
