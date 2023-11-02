import React, { useState } from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';
import { MyPostsContainerPropsType } from './MyPostsContainer';
import { Field, InjectedFormProps, reduxForm, reset } from 'redux-form';
import { postLength50 } from '../../../utils/form_validators/post_validators';
import { PostFormChecker } from '../../common/FormCheckers/PostFormChecker/PostFormChecker';

export const MyPosts: React.FC<MyPostsContainerPropsType> = (props) => {
  const postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));
  const handleSubmit = (postData: MyPostsFormDataType) => {
    props.addPost(postData.post);
    props.resetForm('post');
  };

  return (
    <div className={styles.myposts_box}>
      <div className={styles.post_list_box}>
        <div className={styles.myposts_list_title}>
          <h3> My Posts</h3>
        </div>
        <div>{postList}</div>
      </div>
      <div className={styles.post_form_box}>
        <MyPostsReduxForm onSubmit={handleSubmit} />
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
  const [addNewPostAC, setAddNewPost] = useState(false);
  return (
    <div className={styles.add_post_box}>
      {addNewPostAC ? (
        <form onSubmit={props.handleSubmit} className={styles.add_post_fom_box}>
          <div>
            <Field
              placeholder={'do not exceed 50 chars.'}
              component={PostFormChecker}
              name={'post'}
              validate={[postLength50]}
              warn={postLength50}
            />
          </div>
          <div>
            <button className={styles.add_post_btn}>post it</button>
          </div>
        </form>
      ) : (
        <div className={styles.write_new_post_btn_box}>
          <button className={styles.write_new_post_btn}>write new post</button>
        </div>
      )}
    </div>
  );
};

const MyPostsReduxForm = reduxForm<MyPostsFormDataType>({ form: 'post' })(
  MyPostsForm
);
