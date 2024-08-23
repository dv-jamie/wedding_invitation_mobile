import React from 'react';

import camera from '../assets/icons/camera.svg';
import Contact from './Contact';
import Order from './Order';

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

        <Contact />

        <div id="order">
          <Order />
        </div>

        <div className={styles.information}>
            <img src={camera} alt="카메라 아이콘" />
            <p>
                결혼식 당일 <span>포토부스</span>가 있습니다.<br />
                사진과 함께 따뜻한 말씀 남겨주시면<br />
                소중히 간직하겠습니다.
            </p>
        </div>
    </div>
  );
}

export default Greetings;
