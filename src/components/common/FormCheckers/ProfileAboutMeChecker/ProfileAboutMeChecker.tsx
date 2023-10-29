import styles from './ProfileAboutMeChecker.module.css';

export const ProfileAboutMeChecker = ({
  input,
  placeholder,
  meta,
  ...props
}: any) => {
  return (
    <div>
      <div
        className={`
      ${meta.error && styles.profile_aboutme_input_error} `}
      >
        {input.value.length > 120 && meta.error}
      </div>
      <div>
        <textarea
          {...input}
          cols={46}
          rows={4}
          placeholder={placeholder}
          className={`${styles.profile_aboutme_input} ${
            meta.error && styles.input_background_color_error
          }`}
        />
      </div>
    </div>
  );
};
