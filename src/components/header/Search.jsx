import styles from './Header.module.scss';

function Search({ filter, setFilter }) {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Поиск"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  );
}

export default Search;
