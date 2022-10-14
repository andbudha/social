import React from "react";
import classes from './Profile.module.css';


const Profile =()=> {
    return  <div className={classes.content}>
        <div>
            <img src="https://c4.wallpaperflare.com/wallpaper/244/947/795/cool-berlin-wallpaper-83635-wallpaper-preview.jpg" alt=""/>
        </div>
        <div>
            avatar + description
        </div>
        <div>
            My Posts
            <div>
                New Posts
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>
}

export default Profile;