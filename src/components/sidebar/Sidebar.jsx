import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import styles from './Sidebar.module.scss';
import logo from '../../assets/logo.svg';
import accordion from '../../assets/icons/menu-accordion.svg';
import avatar from '../../assets/user-avatar.svg';
import logout from '../../assets/icons/logout.svg';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return collapsed ? (
    <div className={styles.collapsed}>
      <div onClick={onToggle} className={styles.collapsedIcon}>
        <img src={accordion} />
      </div>
    </div>
  ) : (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div onClick={onToggle} className={styles.accordion}>
          <img src={accordion} />
        </div>
        <Navbar />
      </div>

      <div className={styles.bottom}>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Барнаби Мармадюк</p>
            <p className={styles.userStatus}>Преподаватель</p>
          </div>
          <div className={styles.userAvatar}>
            <img src={avatar} />
          </div>
        </div>

        <div>
          <div className={styles.logout}>
            <img src={logout} />
            <span className={styles.logoutLink}>Выйти</span>
          </div>

          <select className={styles.select}>
            <option>Русский</option>
          </select>
        </div>
        <p className={styles.version}>Версия 1.02</p>
      </div>
    </div>
  );
}

export default Sidebar;
