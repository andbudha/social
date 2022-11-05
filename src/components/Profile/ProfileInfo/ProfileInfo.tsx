import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo =()=> {
    return  (
        <div>
            <div>
                <img src="https://r4.wallpaperflare.com/wallpaper/477/376/886/mountain-near-orange-and-white-cloud-photo-blue-lake-blue-lake-wallpaper-f66b198d49a8475987966dd398d96553.jpg" alt="nightcity image"/>
            </div>
            <div className={classes.description_block}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;