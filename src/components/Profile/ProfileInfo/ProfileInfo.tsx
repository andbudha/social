import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo =()=> {
    return  (
        <div>
            <div>
                <img src="https://r4.wallpaperflare.com/wallpaper/230/642/373/landscape-cityscape-skyscraper-bridge-wallpaper-9d8a0d449b600d5d17c3e49e8dce1047.jpg" alt="city image"/>
            </div>
            <div className={classes.description_block}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;