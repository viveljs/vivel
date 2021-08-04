import * as React from 'react';
import styles from '@styles/modal.module.css';

const Modal: React.FC = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export { Modal };
