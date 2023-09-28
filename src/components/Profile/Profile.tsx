import { ActionTypes } from '../../types/action-types';
import { ProfilePageType } from '../../types/store-types';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

type ProfilePropsTye = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionTypes) => void;
};
export const Profile: React.FC<ProfilePropsTye> = (props) => {
  return (
    <div>
      <ProfileDetails />
      <MyPostsContainer
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
