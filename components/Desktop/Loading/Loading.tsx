import React from 'react';
import './styles.css';

export const Loading = () => {
    return (
        <div id="loading-container">
            <div id="loading-img-container">
                <img
                    src="/images/desktop/notsupport/logo.png"
                    srcSet="/images/desktop/notsupport/logo@2x.png 2x, /images/desktop/notsupport/logo@3x.png 3x"
                    alt="OMO JEJU"
                />
            </div>
            <div id="loading-title-container">
                <p>
                    제주, <br />
                    오프라인 매장이 모이다!
                </p>
            </div>
        </div>
    );
};
