import React from "react";
import classes from './MyPosts.module.css';


const MyPosts =()=> {
    return (
        <div>
            My Posts
            <div>
                New Posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    <img src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg" alt="avatar-img"/>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default MyPosts;