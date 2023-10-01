import styles from './Users.module.css';
import { UsersContainerPropsType } from './UsersContainer';

export const Users: React.FC<UsersContainerPropsType> = (props) => {
  const userList = props.users.map((user) => {
    return (
      <ul>
        <li>{user.firstName}</li>
      </ul>
    );
  });
  return (
    <div>
      <div>{userList}</div>
    </div>
  );
};
