import React from 'react';

function Detail() {
  return (
    <section className="details">
      <div className="details-content">
        <h2>세부 정보</h2>
        <div className="detail-item">
          <h3>일시</h3>
          <p>2024년 10월 10일 오후 3시</p>
        </div>
        <div className="detail-item">
          <h3>장소</h3>
          <p>서울특별시 강남구 청담동 123-45</p>
        </div>
        <div className="detail-item">
          <h3>오시는 길</h3>
          <p>지하철 7호선 청담역 3번 출구에서 도보 5분 거리</p>
          <p>버스 정류장: 청담역, 123번 버스 이용</p>
        </div>
      </div>
    </section>
  );
}

export default Detail;
