import styles from './ErrorBar.module.css';

type ErrorBarPropsType = {
  error: null | string;
};
export const ErrorBar: React.FC<ErrorBarPropsType> = (props) => {
  return <div className={styles.error_box}>{props.error}</div>;
};
