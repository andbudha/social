import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";


const Profile =(props: PostsType)=> {

    return  (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;