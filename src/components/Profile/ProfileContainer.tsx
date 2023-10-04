import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';

export class ProfileAPIContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
      .then((response) => {
        console.log(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};
export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAPIContainer);
