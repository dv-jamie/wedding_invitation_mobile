import React, { useEffect } from 'react';

import kakaoImage from '../assets/icons/kakao.svg';

import styles from './KakaoLinkButton.module.css';

function KakaoLinkButton() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('c315aa0f19b135b8789ebcd12dfdf991');
    }
  }, []);

  const onKakaoLinkButtonClick = () => {
    window.Kakao.Share.sendCustom({
      templateId: 110680,
    });
  }
  
  

  return (
    <button
      className={styles.kakao_link_button}
      onClick={onKakaoLinkButtonClick}
    >
      <img src={kakaoImage} alt="카카오톡 링크 공유 버튼" />
    </button>
  );
}

export default KakaoLinkButton;
