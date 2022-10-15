import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile =()=> {
    return  <div className={classes.content}>
        <div>
            <img src="https://c4.wallpaperflare.com/wallpaper/244/947/795/cool-berlin-wallpaper-83635-wallpaper-preview.jpg" alt=""/>
        </div>
        <div>
            avatar + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;