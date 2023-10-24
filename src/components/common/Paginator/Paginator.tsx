import { useState } from 'react';
import styles from './Paginator.module.css';

type PaginatorPropsType = {
  selectedPage: number;
  totalAmount: number;
  itemsPerPage: number;
  selectPageHandler: (page: number) => void;
};
export const Paginator: React.FC<PaginatorPropsType> = (props) => {
  const amountOfPages = Math.ceil(props.totalAmount / props.itemsPerPage);

  const pages: number[] = [];

  for (let i = 1; i <= amountOfPages; i++) {
    pages.push(i);
  }
  const portionSize = 10;

  let portionCount = Math.ceil(amountOfPages / portionSize);
  let [currentPortion, setCurrentPortion] = useState(1);
  let currentLeftBorder = (currentPortion - 1) * portionSize + 1;
  let currentRightBorder = currentPortion * portionSize;

  return (
    <div className={styles.listPages}>
      {currentPortion > 1 ? (
        <span>
          <button
            onClick={() => {
              currentPortion !== 1 && setCurrentPortion(currentPortion - 1);
            }}
            className={styles.paginator_btn}
          >
            Prev
          </button>
        </span>
      ) : null}
      {pages
        .filter((p) => currentLeftBorder <= p && p <= currentRightBorder)
        .map((p) => (
          <span
            key={p}
            onClick={(e) => {
              props.selectPageHandler(p);
            }}
            className={`${styles.page_number} ${
              props.selectedPage === p && styles.slected_page
            }`}
          >
            {' '}
            {p}
          </span>
        ))}
      {currentPortion < portionCount ? (
        <span>
          <button
            onClick={() => {
              currentPortion !== amountOfPages &&
                setCurrentPortion(currentPortion + 1);
            }}
            className={styles.paginator_btn}
          >
            Next
          </button>{' '}
        </span>
      ) : null}
    </div>
  );
};
