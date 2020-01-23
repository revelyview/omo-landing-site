import React from 'react';
import './styles.css';

export const Footer = () => {
    return (
        <div id="mobile-footer-container">
            <div id="mobile-footer-content">
                <div id="mobile-footer-logo">
                    <img
                        src="/images/footer/logo.png"
                        srcSet="/images/footer/logo@2x.png 2x, /images/footer/logo@3x.png 3x"
                        alt="OMO JEJU"
                    />
                </div>
                <div id="mobile-footer-info">
                    <p>
                        (주)리블리뷰
                        <br />
                        주소 제주대학교 BI센터 108호 <br />
                        대표 정 학<br />
                        고객센터 010-9548-8475
                        <br />
                        사업자번호 771-81-01395 <br />
                        통신판매업신고번호 2019-제주삼도이동-0006
                    </p>
                </div>
            </div>

            <div id="mobile-footer-links">
                <p>
                    <span>서비스 이용약관</span>
                    <span>전자금융거래 이용약관</span>
                    <span>개인정보 처리방침</span>
                </p>
            </div>
        </div>
    );
};
