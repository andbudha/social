import { ProfilePageType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

type ProfilePropsTye = {
  profilePage: ProfilePageType;
  addPost: (newPost: string | undefined) => void;
  updatePostText: (newText: string) => void;
};
export const Profile: React.FC<ProfilePropsTye> = (props) => {
  return (
    <div>
      <ProfileDetails />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updatePostText={props.updatePostText}
      />
    </div>
  );
};
