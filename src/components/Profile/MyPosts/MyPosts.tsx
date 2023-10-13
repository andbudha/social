import React from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';
import { MyPostsContainerPropsType } from './MyPostsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export const MyPosts: React.FC<MyPostsContainerPropsType> = (props) => {
  const postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));
  const handleSubmit = (postData: MyPostsFormDataType) => {
    props.addPost(postData.post);
  };

  return (
    <div className={styles.myposts_block}>
      <h3> My Posts</h3>
      <MyPostsReduxForm onSubmit={handleSubmit} />
      <div className={styles.post_block}>{postList}</div>
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
        <div>
          <Field
            placeholder={'your post'}
            component={'textarea'}
            name={'post'}
          />
        </div>
        <div>
          <button>add post</button>
        </div>
      </form>
    </div>
  );
};

const MyPostsReduxForm = reduxForm<MyPostsFormDataType>({ form: 'post' })(
  MyPostsForm
);
