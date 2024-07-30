import React from 'react';

import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <ul className={styles.gnb}>
        <li>상세내용</li>
        <li>식순</li>
        <li>갤러리</li>
        <li>연락처</li>
      </ul>
    </header>
  );
}

export default Header;
