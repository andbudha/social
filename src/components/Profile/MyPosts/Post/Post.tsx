import React from "react";
import classes from './Post.module.css';


const Post =()=> {
    return (
        <div className={classes.item}>
            <img src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg" alt="avatar-img"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;