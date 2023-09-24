import avatar from '../../../../img/avatar.png';
import { PostType } from '../../../../redux/state';
import styles from './Post.module.css';

type PostPropsType = {
  post: PostType;
};

export const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={styles.post}>
      <div>
        <img className={styles.avatar} src={avatar} alt="avatar lion" />
      </div>
      <div>
        <div>{props.post.message}</div>
        <div>Likes: {props.post.likeCount}</div>
      </div>
    </div>
  );
};
