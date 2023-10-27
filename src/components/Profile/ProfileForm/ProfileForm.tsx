import { ProfileContainerPropsType } from '../ProfileContainer';
import styles from './ProfileForm.module.css';

type ProfileFormPropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};
export const ProfileForm: React.FC<ProfileFormPropsType> = (props) => {
  return <div>Profile-Form</div>;
};
