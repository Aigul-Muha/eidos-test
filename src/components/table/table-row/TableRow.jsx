import TableCell from '../table-cell/TableCell';
import styles from './TableRow.module.scss';

const TableRow = ({ data }) => {
  const { start, status, module, type, room, group } = data;

  return (
    <div className={styles.root}>
      <TableCell data={start} />
      <TableCell data={status} status={status} />
      <TableCell data={module} />
      <TableCell data={type} />
      <TableCell data={room} />
      <TableCell data={group} />
    </div>
  );
};

export default TableRow;
