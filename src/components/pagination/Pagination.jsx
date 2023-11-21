import styles from './Pagination.module.scss';

function Pagination({ page, setPage }) {
  const pages = [1, 2, 3];
  return (
    <div className={styles.root}>
      <div className={styles.pages}>
        {pages.map((p) => (
          <span
            onClick={() => setPage(p)}
            key={p}
            className={page === p ? styles['active'] : styles.page}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
