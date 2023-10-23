import styles from './Paginator.module.css';

type PaginatorPropsType = {
  pages: number[];
  selectedPage: number;
  selectUserPageHandler: (page: number) => void;
};
export const Paginator: React.FC<PaginatorPropsType> = (props) => {
  return (
    <div>
      {props.pages.map((page) => {
        return (
          <span
            key={page}
            onClick={() => props.selectUserPageHandler(page)}
            className={`${styles.page_number} ${
              props.selectedPage === page && styles.slected_page
            }`}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};
