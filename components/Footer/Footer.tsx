import React from 'react';
import './styles.css';

export const Footer = () => {
    return (
        <div id="footer-container">
            <div id="footer-logo">
                <img src="#" alt="회색 로고" />
            </div>
            <div id="footer-info">
                (주)리블리뷰 | 주소 제주대학교 BI센터 108호 <br />
                대표 정 학 | 고객센터 010-9548-8475 | 사업자번호 771-81-01395 <br />
                통신판매업신고번호 2019-제주삼도이동-0006
                <br />
            </div>
            <div id="footer-links">
                <span>서비스 이용약관</span>
                <span>전자금융거래 이용약관</span>
                <span>개인정보 처리방침</span>
            </div>
        </div>
    );
};
