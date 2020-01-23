import React from 'react';
import './styles.css';
import Router from 'next/router';

export const Complete = () => {
    const handlePreviousPage = () => {
        Router.push('/');
    };
    return (
        <div id="complete-container">
            <div id="complete-icon-container">
                <img
                    src="/images/complete/ok.png"
                    srcSet="/images/complete/ok@2x.png 2x,/images/complete/ok@3x.png 3x"
                    alt="신청 완료"
                />
            </div>
            <div id="complete-content-container">
                <p>
                    입점 신청이 <br />
                    완료되었습니다!
                </p>
            </div>
            <div id="complete-button-container">
                <button onClick={handlePreviousPage}>이전 페이지</button>
            </div>
        </div>
    );
};
