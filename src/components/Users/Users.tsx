import React from 'react';
import styles from './Users.module.css';
import { UserType } from '../../types/store-types';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';

type UsersPropsType = {
  selectedPage: number;
  users: UserType[];
  followingBTNToggle: number[];
  amountOfUsers: number;
  usersPerPage: number;
  selectUserPageHandler: (page: number) => void;
  followUserThunk: (userID: number) => void;
  unfollowUserThunk: (userID: number) => void;
};
export const Users: React.FC<UsersPropsType> = (props) => {
  console.log(props.users.length);

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
          totalAmount={props.amountOfUsers}
          itemsPerPage={props.usersPerPage}
          selectedPage={props.selectedPage}
          selectPageHandler={props.selectUserPageHandler}
        />
      </div>
    </div>
  );
};
