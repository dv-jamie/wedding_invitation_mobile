import React from 'react';
import mail from '../assets/icons/mail.svg';
import styles from './Account.module.css';

function Account() {
  return (
    <div className={styles.account}>
          <img src={mail} alt="카메라 아이콘" />
          <p>
            비대면으로 축하를 전하고자 하시는 분들을 위해<br />
            <span>계좌번호</span>를 기재하였습니다.<br />
            축하해 주시려는 따뜻한 마음에 감사드립니다.
          </p>
      </div>
  );
}

export default Account;
