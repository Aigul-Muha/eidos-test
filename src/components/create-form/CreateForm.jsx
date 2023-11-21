import styles from './Create.module.scss';

function CreateForm() {
  return (
    <div className={styles.root}>
      <span className={styles.enter}>Создать сессию</span>

      <form>
        <input className={styles.input} placeholder="Название сессии" type="text" />

        <select className={styles.select}>
          <option>Урок</option>
          <option>Экзамен</option>
          <option>Аккредитация</option>
        </select>

        <input className={styles.input} placeholder="Комната" type="text" />

        <input className={styles.input} placeholder="Группа" type="text" />

        <button className={styles.btn} type="submit">
          Создать
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
