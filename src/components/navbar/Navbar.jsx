import styles from './Navbar.module.scss';
import schedule from '../../assets/icons/navbar/schedule.svg';
import sessions from '../../assets/icons/navbar/sessions.svg';
import rooms from '../../assets/icons/navbar/rooms.svg';
import users from '../../assets/icons/navbar/users.svg';
import groups from '../../assets/icons/navbar/groups.svg';
import gadgets from '../../assets/icons/navbar/gadgets.svg';
import settings from '../../assets/icons/navbar/settings.svg';
import archive from '../../assets/icons/navbar/archive.svg';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <img src={schedule} />
        <a>Расписание</a>
      </div>

      <div className={styles.activeItem}>
        <img src={sessions} />
        <a>Учебные сессии</a>
      </div>

      <div className={styles.item}>
        <img src={rooms} />
        <a>Список комнат</a>
      </div>

      <div className={styles.item}>
        <img src={users} />
        <a>Пользователи</a>
      </div>

      <div className={styles.item}>
        <img src={groups} />
        <a>Учебные группы</a>
      </div>

      <div className={styles.item}>
        <img src={gadgets} />
        <a>Список устройств</a>
      </div>

      <div className={styles.item}>
        <img src={settings} />
        <a>Настройки системы</a>
      </div>

      <div className={styles.item}>
        <img src={archive} />
        <a>Архив</a>
      </div>
    </nav>
  );
}

export default Navbar;
