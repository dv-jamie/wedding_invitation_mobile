import React, { useState } from 'react';

import mail from '../assets/icons/mail.svg';
import copy from '../assets/icons/copy.svg';

import styles from './Account.module.css';

function Account() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedIndex(text);
        setTimeout(() => setCopiedIndex(null), 1000);
      }).catch(err => {
        alert('알 수 없는 오류가 발생했습니다.');
      });
    } else {
      alert('클립보드 API를 지원하지 않습니다.');
    }
  };

  const handleCopyClick = (text) => {
    copyToClipboard(text);
  };

  return (
    <div className={styles.account}>
      <div className={styles.box}>
        <img src={mail} alt="메일 아이콘" />

        <p>
          비대면으로 축하를 전하고자 하시는 분들을 위해<br />
          <span>계좌번호</span>를 기재하였습니다.<br />
          축하해 주시려는 따뜻한 마음에 감사드립니다.
        </p>

        <ul className={styles.list}>
          <li>
            <span className={styles.category_name}>신랑측</span>
            <ul className={styles.account_wrap}>
              <li>
                <span>장상권</span>
                <span>가가은행 0000-0000-0000</span>
                <span onClick={() => handleCopyClick('가가은행 0000-0000-0000')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '가가은행 0000-0000-0000' ? styles.copied : ''} />
                </span>
              </li>
              
              <li>
                <span>전인숙</span>
                <span>가가은행 0000-0000-0000</span>
                <span onClick={() => handleCopyClick('가가은행 0000-0000-0000')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '가가은행 0000-0000-0000' ? styles.copied : ''} />
                </span>
              </li>

              <li>
                <span>장현웅</span>
                <span>KB국민 824202-00-034559</span>
                <span onClick={() => handleCopyClick('KB국민 824202-00-034559')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === 'KB국민 824202-00-034559' ? styles.copied : ''} />
                </span>
              </li>
            </ul>
          </li>

          <li>
            <span className={styles.category_name}>신부측</span>
            <ul className={styles.account_wrap}>
              <li>
                <span>서병열</span>
                <span>씨티 197-07423-265-01</span>
                <span onClick={() => handleCopyClick('씨티 197-07423-265-01')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '씨티 197-07423-265-01' ? styles.copied : ''} />
                </span>
              </li>

              <li>
                <span>박선연</span>
                <span>우리 450-024847-12-001</span>
                <span onClick={() => handleCopyClick('우리 450-024847-12-001')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '우리 450-024847-12-001' ? styles.copied : ''} />
                </span>
              </li>

              <li>
                <span>서정민</span>
                <span>우리 1002-647-189621</span>
                <span onClick={() => handleCopyClick('우리 1002-647-189621')}>
                  <img src={copy} alt="복사 아이콘" className={copiedIndex === '우리 1002-647-189621' ? styles.copied : ''} />
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;