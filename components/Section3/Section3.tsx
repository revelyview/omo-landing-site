import React from 'react';

import './styles.css';

export const Section3 = () => {
    return (
        <div id="section3-container">
            <div id="section3-empty"></div>
            <div id="section3-logo">
                {/* <div className="container-padding">
                    <img
                        src="/images/section3/omo.png"
                        srcSet="/images/section3/omo@2x.png 2x, /images/section3/omo@3.png 3x"
                        alt="OMO"
                    />
                </div> */}
            </div>
            <div id="section3-content">
                <div id="section3-title">오모 핵심 서비스</div>
                <p>
                    골목 상권 살리기 프로젝트, 오모
                    <br />
                    오모는 매장이 필요로 하는 서비스와 도민이 원하는 서비스가 공존하는 플랫폼입니다.
                </p>
                <p className="highlight">
                    <span>오모가 제공하는 서비스</span>
                    <br />
                    ‘온라인으로 매장과 상품 찾아보기’
                    <br />
                    ‘찜한 매장을 통한 팝업 서비스’,
                    <br />
                    ‘24시간 이내 배송 서비스를 통한 1일 상권’
                    <br />
                </p>
            </div>

            <div id="section3-icon-list-container">
                <div className="section3-icon-list-item">
                    <img
                        src="/images/section3/icon1.png"
                        srcSet="/images/section3/icon1@2x.png 2x, /images/section3/icon1@3x.png 3x"
                        alt="매장 위치 파악"
                    />
                    <p>매장 위치 파악</p>
                </div>
                <div className="section3-icon-list-item">
                    <img
                        src="/images/section3/icon2.png"
                        srcSet="/images/section3/icon2@2x.png 2x, /images/section3/icon2@3x.png 3x"
                        alt="온라인으로 찾는 나만의 매장"
                    />
                    <p>
                        온라인으로 <br />
                        찾는 나만의 매장
                    </p>
                </div>
                <div className="section3-icon-list-item">
                    <img
                        src="/images/section3/icon3.png"
                        srcSet="/images/section3/icon3@2x.png 2x, /images/section3/icon3@3x.png 3x"
                        alt="별점 / 리뷰"
                    />
                    <p>별점 / 리뷰</p>
                </div>
                <div className="section3-icon-list-item">
                    <img
                        src="/images/section3/icon4.png"
                        srcSet="/images/section3/icon4@2x.png 2x, /images/section3/icon4@3x.png 3x"
                        alt="배송 서비스"
                    />
                    <p>배송 서비스</p>
                </div>
                <div className="section3-icon-list-item">
                    <img
                        src="/images/section3/icon5.png"
                        srcSet="/images/section3/icon5@2x.png 2x, /images/section3/icon5@3x.png 3x"
                        alt="포인트 적립"
                    />
                    <p>포인트 적립</p>
                </div>
            </div>

            <div id="section3-empty"></div>
            <a id="find"></a>
        </div>
    );
};
