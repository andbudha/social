import { ProfilePageType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileDetails } from './ProfileDetails/ProfileDetals';

type ProfilePropsTye = {
  profilePage: ProfilePageType;
  addPost: (newPost: string | undefined) => void;
};
export const Profile: React.FC<ProfilePropsTye> = (props) => {
  return (
    <div>
      <ProfileDetails />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} />
    </div>
  );
};
