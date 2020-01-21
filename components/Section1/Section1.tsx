import React from 'react';

import './styles.css';

export const Section1 = () => {
    const handleClick = () => {
        // window.location.hash = '#find';
        document.querySelector('#find').scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <div id="section1-container">
            <div id="section1-empty"></div>
            <div id="section1-empty"></div>
            <div id="section1-logo">
                <div className="container-padding">
                    <img
                        src="/images/section1/logo.png"
                        srcSet="/images/section1/logo@2x.png 2x, /images/section1/logo@3.png 3x"
                        alt="OMO JEJU"
                    />
                </div>
            </div>
            <div id="section1-content">
                <div className="container-padding">
                    <div id="section1-title">
                        <p>
                            제주, <br />
                            오프라인 매장이 모이다!
                        </p>
                    </div>
                    <div id="section1-subtitle">
                        <p>
                            제주도 오프라인 매장을 한 번에 모았다!
                            <br />
                            긴 배송 기간에 지쳤다면, 나만의 매장을 찾고 싶다면,
                            <br />
                            OMO로 오라! 3월 정식 런칭 예정!
                        </p>
                    </div>
                </div>
            </div>

            <div id="section1-button">
                <div className="container-padding">
                    <button onClick={handleClick}>입점신청 ➡️</button>
                </div>
            </div>
            <div id="section1-empty"></div>
        </div>
    );
};
