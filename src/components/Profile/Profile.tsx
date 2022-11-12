import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/state";

type ProfilePropsType = {
    state: RootStateType
}

const Profile =(props: ProfilePropsType)=> {

    return  (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts} />
        </div>
    );
}

export default Profile;