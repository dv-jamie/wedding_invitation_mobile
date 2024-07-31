import React from 'react';

import styles from './Gnb.module.css';

function Gnb({ scrollToSection }) {
  return (
    <nav className={styles.gnb_wrap}>
      <ul className={styles.gnb}>
        <li onClick={() => scrollToSection('greeting')}>연락처</li>
        <li onClick={() => scrollToSection('order')}>식순</li>
        <li onClick={() => scrollToSection('location')}>오시는 길</li>
        <li onClick={() => scrollToSection('gallery')}>사진첩</li>
      </ul>
    </nav>
  );
}

export default Gnb;
