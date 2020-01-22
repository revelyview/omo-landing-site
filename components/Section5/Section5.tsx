import React from 'react';
import { SectionItem } from './SectionItem';
import './styles.css';

export const Section5 = () => {
    return (
        <div id="section5-container">
            <div className="section5-title">오모만의 혜택</div>
            <div className="section5-items">
                <SectionItem
                    title="배송 서비스를 통한 1일 상권"
                    icon={
                        <img
                            src="/images/section5/icon1.png"
                            srcSet="/images/section5/icon1@2x.png 2x,/images/section5/icon1@3x.png 3x"
                        />
                    }
                />
                <SectionItem
                    title="'오모' 매장의 적립 포인트"
                    icon={
                        <img
                            src="/images/section5/icon2.png"
                            srcSet="/images/section5/icon2@2x.png 2x,/images/section5/icon2@3x.png 3x"
                        />
                    }
                />
                <SectionItem
                    title="방구석에서 찾는 나만의 매장"
                    icon={
                        <img
                            src="/images/section5/icon3.png"
                            srcSet="/images/section5/icon3@2x.png 2x,/images/section5/icon3@3x.png 3x"
                        />
                    }
                />
                <SectionItem
                    title="도민을 위한 '오모' 매장의 기프티콘"
                    icon={
                        <img
                            src="/images/section5/icon4.png"
                            srcSet="/images/section5/icon4@2x.png 2x,/images/section5/icon4@3x.png 3x"
                        />
                    }
                />
            </div>
            <div>
                <img src="" alt="OFFLINE, MEET ONLINE" />
            </div>
            <div className="section5-subtitle">‘골목 상권 살리기 프로젝트’</div>
        </div>
    );
};
