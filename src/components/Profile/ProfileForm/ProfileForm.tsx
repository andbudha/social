import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './ProfileForm.module.css';

import { ProfilePositionChecker } from '../../common/FormCheckers/ProfilePositionChecker/ProfilePositionChecker';
import { positionLength25 } from '../../../utils/form_validators/profile_position_validator';
import { nameLength25 } from '../../../utils/form_validators/profile_name_validator';
import { ProfileNameChecker } from '../../common/FormCheckers/ProfileNameChecker/ProfileNameChecker';
import { ProfileContainerPropsType } from '../ProfileContainer';
import { UserProfileType } from '../../../types/store-types';
import { aboutMeLength120 } from '../../../utils/form_validators/profile_aboutme_validator';
import { ProfileAboutMeChecker } from '../../common/FormCheckers/ProfileAboutMeChecker/ProfileAboutMeChecker';

type ProfileFormPropsType = {
  profileContainerProps: ProfileContainerPropsType;
};
export const ProfileForm: React.FC<ProfileFormPropsType> = (props) => {
  const onSubmit = (newProfileData: UserProfileType) => {
    props.profileContainerProps.updateProfile(newProfileData);
  };
  return (
    <div>
      <ProfileReduxForm
        onSubmit={onSubmit}
        initialValues={props.profileContainerProps.userProfile}
      />
    </div>
  );
};

const Form: React.FC<InjectedFormProps<UserProfileType>> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <h4 className={styles.strong}>Name:</h4>
          <Field
            name={'fullName'}
            placeholder={'Enter your name'}
            type={'text'}
            component={ProfileNameChecker}
            validate={[nameLength25]}
          />
        </div>
        <div>
          <h4 className={styles.strong}>Open for a job:</h4>
          <div className={styles.job_checkbox_box}>
            <Field
              className={styles.job_checkbox}
              name={'lookingForAJob'}
              type={'checkbox'}
              component={'input'}
            />
            <h4 className={styles.job_checkbox_answer}>Yes</h4>
          </div>
        </div>
        <div>
          <h4 className={styles.strong}>Position:</h4>
          <Field
            name={'lookingForAJobDescription'}
            placeholder={'Enter position'}
            type={'text'}
            component={ProfilePositionChecker}
            validate={[positionLength25]}
          />
        </div>
        <div>
          <h4 className={styles.strong}>About me:</h4>
          <Field
            name={'aboutMe'}
            placeholder={'Tell about yourself...'}
            type={'text'}
            component={ProfileAboutMeChecker}
            validate={[aboutMeLength120]}
          />
        </div>
        <div className={styles.save_changes_btn_box}>
          <button className={styles.save_changes_btn}>save changes</button>
        </div>
      </form>
    </div>
  );
};

const ProfileReduxForm = reduxForm<UserProfileType>({
  form: 'profile-form',
})(Form);
