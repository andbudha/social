import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './ProfileForm.module.css';

import { connect } from 'react-redux';
import { AppDispatchType, AppRootStateType } from '../../../redux/redux-store';

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
          <p>Open for a job:</p>
          <Field name={'open-for-job'} type={'checkbox'} component={'input'} />
        </div>
        <div>
          <p>Position:</p>
          <Field
            name={'position'}
            placeholder={'Enter position'}
            type={'text'}
            component={'input'}
          />
        </div>
        <div>
          <p>Get in touch:</p>
          <Field
            name={'contact-source'}
            placeholder={'enter contact source'}
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
