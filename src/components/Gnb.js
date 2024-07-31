import React from 'react';

import styles from './Gnb.module.css';

function Gnb() {
  return (
    <nav>
      <ul className={styles.gnb}>
        <li>인사말</li>
        <li>식순</li>
        <li>오시는 길</li>
        <li>연락처</li>
        <li>갤러리</li>
      </ul>
    </nav>
  );
}

export default Gnb;
