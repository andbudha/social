import React from 'react';
import styles from './Users.module.css';
import { UserType } from '../../types/store-types';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';

type UsersPropsType = {
  pages: number[];
  selectedPage: number;
  users: UserType[];
  followingBTNToggle: number[];
  selectUserPageHandler: (page: number) => void;
  followUserThunk: (userID: number) => void;
  unfollowUserThunk: (userID: number) => void;
};
export const Users: React.FC<UsersPropsType> = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <User
              user={user}
              followingBTNToggle={props.followingBTNToggle}
              followUserThunk={props.followUserThunk}
              unfollowUserThunk={props.unfollowUserThunk}
            />
          </div>
        );
      })}
      <div className={styles.page_number_box}>
        <Paginator
          pages={props.pages}
          selectedPage={props.selectedPage}
          selectUserPageHandler={props.selectUserPageHandler}
        />
      </div>
    </div>
  );
};
