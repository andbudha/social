import { BiMessageDetail } from 'react-icons/bi';
import { PostType } from '../../../../types/store-types';
import styles from './Post.module.css';

type PostPropsType = {
  post: PostType;
};

export const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_icon_box}>
        <BiMessageDetail className={styles.post_icon} />
      </div>
      <div>
        <div>{props.post.message}</div>
        <div>Likes: {props.post.likeCount}</div>
      </div>
    </div>
  );
};
