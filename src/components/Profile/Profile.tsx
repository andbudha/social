import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileContainerPropsType } from './ProfileContainer';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

export const Profile: React.FC<ProfileContainerPropsType> = (props) => {
  return (
    <div>
      <ProfileDetails profileContainerProps={props} />
      <MyPostsContainer />
    </div>
  );
};
