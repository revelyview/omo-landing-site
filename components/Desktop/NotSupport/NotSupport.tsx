import React from 'react';

import './styles.css';

export const NotSupport = () => {
    return (
        <div id="notsupport-container">
            <div id="notsupport-img-container">
                <img
                    src="/images/desktop/notsupport/logo.png"
                    srcSet="/images/desktop/notsupport/logo@2x.png 2x, /images/desktop/notsupport/logo@3x.png 3x"
                    alt="OMO JEJU"
                />
            </div>
            <div id="notsupport-title-container">
                <p>
                    제주, <br />
                    오프라인 매장이 모이다!
                </p>
            </div>
            <div id="notsupport-content-container">
                <p>
                    죄송합니다.
                    <br />
                    저희 사이트는 인터넷 익스플로러를 지원하지 않습니다.
                    <br />
                    <a href="https://www.google.com/intl/ko/chrome/" target="_blank">
                        구글 크롬
                    </a>
                    ,{' '}
                    <a href="https://www.mozilla.org/ko/firefox/new/" target="_blank">
                        모질라 파이어폭스
                    </a>
                    , 마이크로소프트 엣지, <br />
                    애플 사파리 등의 웹 브라우져를 설치하고, 사용하십시오.
                </p>
            </div>
        </div>
    );
};
