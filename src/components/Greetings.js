import React from 'react';

import styles from './Greetings.module.css';

function Greetings() {
  return (
    <div className={styles.greetings}>
        <p>
            두 사람이 새로운 시작을 하는 특별한 날,<br />
            소중한 당신을 초대합니다.<br />
            귀한 시간 내어주시는 만큼<br />
            감사한 마음 간직하며 살겠습니다.
        </p>
    </div>
  );
}

export default Greetings;
