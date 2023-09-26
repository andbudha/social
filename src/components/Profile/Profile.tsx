import { ActionTypes, ProfilePageType } from '../../redux/store';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

type ProfilePropsTye = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionTypes) => void;
};
export const Profile: React.FC<ProfilePropsTye> = (props) => {
  return (
    <div>
      <ProfileDetails />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
