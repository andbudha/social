import React from 'react';
import styles from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
  status: string | undefined;
};
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
  };

  setOnEditModeHandler() {
    this.setState({
      editMode: true,
    });
  }

  setOffEditModeHandler() {
    this.setState({
      editMode: false,
    });
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div onDoubleClick={this.setOnEditModeHandler.bind(this)}>
            Big Things Have Small Beginnings!
          </div>
        )}
        {this.state.editMode && (
          <div onBlur={this.setOffEditModeHandler.bind(this)}>
            <input
              autoFocus
              value={this.props.status}
              className={styles.status_input}
              type="text"
            />
          </div>
        )}
      </div>
    );
  }
}
