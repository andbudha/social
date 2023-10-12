import React, { ChangeEvent, useState } from 'react';
import styles from './ProfileStatus.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';
import { UpdatingLoader } from '../../common/UpdatingLoader/UpdatingLoader';

type ProfileStatusPropsType = {
  profileContainerProps: ProfileContainerPropsType;
};
export const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [profileStatus, setProfileStatus] = useState('');

  const setOnEditModeHandler = () => {
    setEditMode(true);
  };

  const setOffEditModeHandler = () => {
    setEditMode(false);
    props.profileContainerProps.setProfileStatusThunk(profileStatus);
  };

  const inputValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProfileStatus(event.currentTarget.value);
  };
  return (
    <div>
      {!editMode &&
        (props.profileContainerProps.isUpdatingStatus ? (
          <UpdatingLoader />
        ) : (
          <div onDoubleClick={setOnEditModeHandler}>
            {props.profileContainerProps.profileStatus ||
              'Double-click to add a new status!'}
          </div>
        ))}
      {editMode && (
        <div onBlur={setOffEditModeHandler}>
          <input
            autoFocus
            value={profileStatus}
            onChange={inputValueGettingHandler}
            className={styles.status_input}
            type="text"
          />
        </div>
      )}
    </div>
  );
};

// import React, { ChangeEvent } from 'react';
// import styles from './ProfileStatus.module.css';
// import { ProfileContainerPropsType } from '../ProfileContainer';

// type ProfileStatusPropsType = {
//   profileContainerProps: ProfileContainerPropsType;
// };
// export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
//   state = {
//     editMode: false,
//     status: '',
//   };

//   setOnEditModeHandler = () => {
//     this.setState({
//       editMode: true,
//     });
//   };

//   setOffEditModeHandler = () => {
//     this.setState({
//       editMode: false,
//     });
//   };

//   inputValuegettingHandler(event: ChangeEvent<HTMLInputElement>) {
//     console.log(event.currentTarget.value);
//     this.setState({ status: event.currentTarget.value });
//   }

//   render() {
//     return (
//       <div>
//         {!this.state.editMode && (
//           <div onDoubleClick={this.setOnEditModeHandler}>
//             {this.props.profileContainerProps.profileStatus || 'No status'}
//           </div>
//         )}
//         {this.state.editMode && (
//           <div onBlur={this.setOffEditModeHandler.bind(this)}>
//             <input
//               autoFocus
//               onChange={this.inputValuegettingHandler}
//               // value={this.state.status || ''}
//               className={styles.status_input}
//               type="text"
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
