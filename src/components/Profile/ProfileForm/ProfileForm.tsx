import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './ProfileForm.module.css';

import { connect } from 'react-redux';
import { AppDispatchType, AppRootStateType } from '../../../redux/redux-store';
import { ProfilePositionChecker } from '../../common/FormCheckers/ProfilePositionChecker/ProfilePositionChecker';
import { positionLength25 } from '../../../utils/form_validators/profile_position_validator';

type newProfileDataType = {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contactSource: string;
};

type ProfileFormPropsType = {
  setProfileFormStatus: () => void;
};
export const ProfileForm: React.FC<ProfileFormContainerPropsType> = () => {
  const onSubmit = (newProfileData: newProfileDataType) => {
    console.log(newProfileData);
  };
  return (
    <div>
      <ProfileReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const Form: React.FC<InjectedFormProps<newProfileDataType>> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <h4 className={styles.strong}>Open for a job:</h4>
          <div className={styles.job_checkbox_box}>
            <Field
              className={styles.job_checkbox}
              name={'open-for-job'}
              type={'checkbox'}
              component={'input'}
            />
            <h4 className={styles.job_checkbox_answer}>Yes</h4>
          </div>
        </div>
        <div>
          <h4 className={styles.strong}>Position:</h4>
          <Field
            name={'position'}
            placeholder={'Enter position'}
            type={'text'}
            component={ProfilePositionChecker}
            validate={[positionLength25]}
          />
        </div>
        <div>
          <h4 className={styles.strong}>Get in touch:</h4>
          <Field
            name={'contact-source'}
            placeholder={'Enter contact source'}
            type={'text'}
            component={'input'}
          />
        </div>
        <div className={styles.save_changes_btn_box}>
          <button className={styles.save_changes_btn}>save changes</button>
        </div>
      </form>
    </div>
  );
};

const ProfileReduxForm = reduxForm<newProfileDataType>({
  form: 'profile-form',
})(Form);

type ProfileFormContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType;

type mapStateToPropsType = {};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {};
};

type mapDispatchToPropsType = {};
const mapDispatchToProps = (
  dispatch: AppDispatchType
): mapDispatchToPropsType => {
  return {};
};

export const ProfileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
