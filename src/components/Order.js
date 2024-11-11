import React from 'react';

import styles from './Order.module.css';

function Order() {
  return (
    <div className={styles.order}>
      <h3 className={styles.caption}><span>WEDDING CEREMONY</span></h3>

      <ul className={styles.table}>
        <li>
          <span>개식사</span>
          <span>사회자</span>
        </li>
        <li>
          <span>화촉점화</span>
          <span>양가 부모님</span>
        </li>
        <li>
          <span>입장</span>
          <span>신랑ㆍ신부</span>
        </li>
        <li>
          <span>맞절</span>
          <span>신랑ㆍ신부</span>
        </li>
        <li>
          <span>혼인서약</span>
          <span>주례자</span>
        </li>
        <li>
          <span>성혼선언</span>
          <span>주례자</span>
        </li>
        <li>
          <span>주례사</span>
          <span>주례자</span>
        </li>
        <li>
          <span>축가</span>
          <span>신부 동생</span>
        </li>
        <li>
          <span>행진</span>
          <span>신랑ㆍ신부</span>
        </li>
        <li>
          <span>폐식</span>
          <span>사회자</span>
        </li>
        <li>
          <span>사진촬영</span>
          <span>가족ㆍ지인</span>
        </li>
      </ul>
    </div>
  );
}

export default Order;
