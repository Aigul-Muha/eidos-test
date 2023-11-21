import styles from './TableCell.module.scss';

const TableCell = ({ data }) => {
  return <div className={styles.root}>{data}</div>;
};

export default TableCell;
