import TableHeader from './table-header/TableHeader';
import TableRow from './table-row/TableRow';
import styles from './Table.module.scss';

const Table = ({ content }) => {
  return (
    <div className={styles.root}>
      <TableHeader />
      {content.map((data) => (
        <TableRow key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Table;
