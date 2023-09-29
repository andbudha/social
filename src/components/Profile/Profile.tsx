import { MyPostsContainer } from './MyPosts/MyPostsContainer';

import { ProfileDetails } from './ProfileDetails/ProfileDetails';

type ProfilePropsTye = {};
export const Profile: React.FC<ProfilePropsTye> = () => {
  return (
    <div>
      <ProfileDetails />
      <MyPostsContainer />
    </div>
  );
};
