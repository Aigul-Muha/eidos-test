import styles from './TableHeader.module.scss';

const TableHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.item}>Дата и время</div>
      <div className={styles.item}>Статус</div>
      <div className={styles.item}>Название учебного модуля</div>
      <div className={styles.item}>Тип сессии</div>
      <div className={styles.item}>Комната</div>
      <div className={styles.item}>Группа</div>
    </div>
  );
};

export default TableHeader;
