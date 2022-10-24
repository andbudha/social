import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo =()=> {
    return  (
        <div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/244/947/795/cool-berlin-wallpaper-83635-wallpaper-preview.jpg" alt=""/>
            </div>
            <div className={classes.description_block}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;