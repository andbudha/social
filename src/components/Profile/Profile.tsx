import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

type ProfileType ={
    message: string
}

const Profile =(props: ProfileType)=> {
    return  <div>
        <div>
            <img src="https://c4.wallpaperflare.com/wallpaper/244/947/795/cool-berlin-wallpaper-83635-wallpaper-preview.jpg" alt=""/>
        </div>
        <div>
            <br/>
            {props.message}
            <br/>
            <br/>
            avatar + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;