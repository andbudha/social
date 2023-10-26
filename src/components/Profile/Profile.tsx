import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileContainerPropsType } from './ProfileContainer';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';
type ProfilePropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};
export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileDetails
        profileContainerProps={props.profileContainerProps}
        isOwner={props.isOwner}
      />
      <MyPostsContainer />
    </div>
  );
};
