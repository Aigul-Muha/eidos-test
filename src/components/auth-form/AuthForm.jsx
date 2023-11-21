import styles from './AuthForm.module.scss';

function AuthForm() {
  return (
    <div className={styles.root}>
      <span className={styles.enter}>Вход</span>

      <form>
        <input className={styles.input} placeholder="Email" type="email" />

        <input className={styles.input} placeholder="Пароль" type="password" minLength="8" />

        <a className={styles.link}>Забыли пароль?</a>
        <button className={styles.btn} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
