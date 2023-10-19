import React from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';
import { MyPostsContainerPropsType } from './MyPostsContainer';
import { Field, InjectedFormProps, reduxForm, reset } from 'redux-form';
import { postLength100 } from '../../../utils/form_validators/post_validators';
import { PostFormChecker } from '../../common/FormCheckers/PostFormChecker/PostFormChecker';

export const MyPosts: React.FC<MyPostsContainerPropsType> = (props) => {
  const postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));
  const handleSubmit = (postData: MyPostsFormDataType) => {
    props.addPost(postData.post);
  };

  return (
    <div className={styles.myposts_block}>
      <MyPostsReduxForm onSubmit={handleSubmit} />

      <div className={styles.post_block}>
        <div className={styles.myposts_list_title}>
          <h3> My Posts</h3>
        </div>
        <div>{postList}</div>
      </div>
    </div>
  );
};

type MyPostsFormDataType = {
  post: string;
};
export const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormDataType>> = (
  props
) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className={styles.add_post_box}>
          <div>
            <Field
              placeholder={'your new post...'}
              component={PostFormChecker}
              name={'post'}
              validate={[postLength100]}
              warn={postLength100}
            />
          </div>
          <div>
            <button className={styles.add_post_btn}>add new post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const MyPostsReduxForm = reduxForm<MyPostsFormDataType>({ form: 'post' })(
  MyPostsForm
);
