import { ActionTypes, ProfilePageType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

type ProfilePropsTye = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionTypes) => void;
  // addPost: () => void;
  // updatePostText: (newText: string) => void;
};
export const Profile: React.FC<ProfilePropsTye> = (props) => {
  return (
    <div>
      <ProfileDetails />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        // updatePostText={props.updatePostText}
        // addPost={props.addPost}
      />
    </div>
  );
};
