import React from 'react';

import './styles.css';

export const Section1 = () => {
    const handleClick = () => {
        // window.location.hash = '#find';
        document.querySelector('#section6').scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <div id="section1-container">
            <div id="section1-content">
                <div id="section1-logo">
                    <img
                        src="/images/section1/logo.png"
                        srcSet="/images/section1/logo@2x.png 2x, /images/section1/logo@3x.png 3x"
                        alt="OMO JEJU"
                    />
                </div>
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

                <div id="section1-button">
                    <div className="section1-container-padding">
                        <button onClick={handleClick}>
                            <img
                                src="/images/section1/button.png"
                                srcSet="/images/section1/button@2x.png 2x, /images/section1/button@3x.png 3x"
                                alt="입점 신청"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
