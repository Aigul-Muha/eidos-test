import styles from './Modal.module.scss';

function Modal({ open, setOpen, setAuthOpen, children }) {
  const closeHandler = () => {
    if (open) {
      setOpen(false);
    }
    setAuthOpen(false);
  };

  return (
    <>
      <div className={styles.overlay} onClick={closeHandler}></div>
      <div className={styles.root}>{children}</div>
    </>
  );
}
export default Modal;
