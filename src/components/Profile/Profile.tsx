import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/state";

type ProfilePropsType = {
    state: RootStateType
    addPost: (postMessage: string)=> void
}

const Profile =(props: ProfilePropsType)=> {

    return  (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;