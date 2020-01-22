import React from 'react';

import './styles.css';

export const Section2 = () => {
    return (
        <div id="section2-container">
            {/* <div id="section2-empty"></div> */}
            {/* <div id="section2-empty"></div> */}
            <div id="section2-logo">
                <div className="section2-container-padding">
                    <img
                        src="/images/section2/omo.png"
                        srcSet="/images/section2/omo@2x.png 2x, /images/section2/omo@3.png 3x"
                        alt="OMO"
                    />
                </div>
            </div>
            <div id="section2-content">
                <div id="section2-title"></div>
                <div id="section2-content">
                    <p className="section2-container-padding">
                        오모는 <span className="content-accent">‘골목 상권 살리기 프로젝트’</span>의 일환으로, <br />
                        '오프라인 매장 모여라' 라는 뜻을 지니고 있습니다.
                        <br />
                        <br />
                        제주 시내부터 골목까지 오프라인 매장과 제휴를 맺으려 하고 있으며, <br />
                        온라인을 통해 매장을 알릴 수 있는 서비스를 제공합니다.
                        <br />
                        <br />
                        제주 매장 곳곳의 최신정보와 이벤트를 확인 할 수 있으며, <br />
                        방문 유도를 위한 다양한 서비스 제공 및 추가 기능 업데이트를 준비 중에 있습니다.
                        <br />
                        <br />
                        직접 걸어다니는 것이 아닌, 방구석에서 나만의 매장 찾기!
                    </p>
                </div>
            </div>

            <div id="section2-empty"></div>
            <a id="find"></a>
        </div>
    );
};
