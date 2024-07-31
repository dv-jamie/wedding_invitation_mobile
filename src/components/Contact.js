import React from 'react';

import mobile from '../assets/icons/mobile.svg';
import styles from './Contact.module.css';

function Contact() {
    const onNameClick = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };
    
    return (
        <div className={styles.contact}>
            <ul>
                <li>
                    <span onClick={() => onNameClick("010-0000-0000")}>장상권</span>
                    ㆍ
                    <span onClick={() => onNameClick("010-0000-0000")}>전인숙</span>
                    의 장남
                    <span onClick={() => onNameClick("010-9284-3165")}>장현웅</span>
                </li>

                <li>
                    <span onClick={() => onNameClick("010-3787-2506")}>서병열</span>
                    ㆍ
                    <span onClick={() => onNameClick("010-4735-2506")}>박선연</span>
                    의 장녀
                    <span onClick={() => onNameClick("010-3786-2506")}>서정민</span>
                </li>
            </ul>

            <button className={styles.contact_button}>
                <img src={mobile} alt="전화 아이콘" />
                연락하기 (이름 클릭)
            </button>
        </div>
    );
}

export default Contact;