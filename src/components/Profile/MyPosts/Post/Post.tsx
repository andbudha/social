import profileImage from '../../../../images/avatars/ava7.png';
import { PostType } from '../../../../types/store-types';
import styles from './Post.module.css';

type PostPropsType = {
  post: PostType;
};

export const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={styles.post}>
      <div>
        <img className={styles.avatar} src={profileImage} alt="avatar lion" />
      </div>
      <div>
        <div>{props.post.message}</div>
        <div>Likes: {props.post.likeCount}</div>
      </div>
    </div>
  );
};
