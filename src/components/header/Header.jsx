import Search from './Search';
import styles from './Header.module.scss';
import filterImg from '../../assets/icons/filter.svg';
import sort from '../../assets/icons/sort.svg';

function Header({ filter, setFilter, setOpen, setAuthOpen }) {
  return (
    <div className={styles.root}>
      <Search filter={filter} setFilter={setFilter} />
      <div>
        <img src={filterImg} />
      </div>
      <div>
        <img src={sort} />
      </div>
      <button className={styles.btn} onClick={() => setOpen(true)}>
        Создать
      </button>
      <button className={styles.btn} onClick={() => setAuthOpen(true)}>
        Войти
      </button>
    </div>
  );
}

export default Header;
