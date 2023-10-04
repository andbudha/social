import React from 'react';
import axios from 'axios';
import { UsersContainerPropsType } from './UsersContainer';
import { Users } from './Users';

export class UsersAPIContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.usersPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(response.data);
      });
  }

  selectUserPageHandler = (page: number) => {
    this.props.selectUserPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const amountOfPages = Math.ceil(
      this.props.amountOfUsers / this.props.usersPerPage
    );

    const pages: number[] = [];

    for (let i = 1; i <= amountOfPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        <Users
          pages={pages}
          selectedPage={this.props.selectedPage}
          users={this.props.users}
          selectUserPageHandler={this.selectUserPageHandler}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
        />
      </div>
    );
  }
}
