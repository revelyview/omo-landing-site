import React from 'react';
import { SectionItem } from './SectionItem';
import './styles.css';

export const Section4 = () => {
    return (
        <div id="mobile-section4-container">
            <SectionItem
                titleNo="01"
                title="매장 위치 파악"
                subtitle="위치 서비스 기반 동네 매장 찾기!"
                content={
                    <>
                        '오모'는 위치 서비스에 기반하여 주변
                        <br />
                        매장을 찾을 수 있습니다.
                        <br />
                        내 위치에 기반하여 매장 페이지 방문,
                        <br />
                        주변 매장의 상품 정보, 매장에서 제공하는
                        <br />
                        이벤트 상품 등을 찾아 볼 수 있습니다.
                        <br />타 지역 매장은 검색을 통해 찾아 볼 수 있습니다.
                    </>
                }
                image={
                    <img
                        src="/images/section4/phone1.png"
                        srcSet="/images/section4/phone1@2x.png 2x, /images/section4/phone1@3x.png 3x"
                        alt="매장 위치 파악"
                    />
                }
            />
            <SectionItem
                titleNo="02"
                title={
                    <>
                        온라인으로 찾는
                        <br /> 나만의 매장
                    </>
                }
                subtitle="방구석에서 찾는 나만의 매장!"
                content={
                    <>
                        '오모'는 설정 위치에 기반하여 주변 매장의 상품을 <br />
                        모아서 볼 수 있습니다.
                        <br />
                        밖을 나가지 않더라도 상품 사진을 통하여 나에게 <br />
                        맞는 나만의 매장을 찾아볼 수 있습니다.
                        <br />
                        실시간으로 업데이트 되는 상품 현황은 매장의 <br />
                        최신 정보를 받아볼 수 있습니다.
                    </>
                }
                image={
                    <img
                        src="/images/section4/phone2.png"
                        srcSet="/images/section4/phone2@2x.png 2x, /images/section4/phone2@3x.png 3x"
                        alt="온라인으로 찾는 나만의 매장"
                    />
                }
            />
            <SectionItem
                titleNo="03"
                title="별점 / 리뷰"
                subtitle="리뷰를 통한 핫플 매장 찾기!"
                content={
                    <>
                        '오모'는 상품 구매 및 매장 방문 후기를
                        <br />
                        남길 수 있는 공간이 있습니다. <br />
                        매장 프로필 옆 별점을 클릭하면, <br />
                        상세 리뷰를 찾아볼 수 있습니다.
                    </>
                }
                image={
                    <img
                        src="/images/section4/phone3.png"
                        srcSet="/images/section4/phone3@2x.png 2x, /images/section4/phone3@3x.png 3x"
                        alt="별점 / 리뷰"
                    />
                }
            />
            <SectionItem
                titleNo="04"
                title="배송 서비스"
                subtitle="배송 서비스를 통한 1일 상권!"
                content={
                    <>
                        '오모'의 이용자는 물류 택배를 통하여 상품을
                        <br />
                        배송받을 수 있습니다. 배송 서비스와 관련된
                        <br />
                        전화 업무 및 배송 신청은 오모에서 이뤄집니다.
                        <br />
                        상품 수령의 다른 방식으로는 직접 방문하는
                        <br />
                        직접 수령이 있습니다.
                    </>
                }
                image={
                    <img
                        src="/images/section4/phone4.png"
                        srcSet="/images/section4/phone4@2x.png 2x, /images/section4/phone4@3x.png 3x"
                        alt="배송 서비스"
                    />
                }
            />

            <SectionItem
                titleNo="05"
                title="포인트 적립"
                subtitle="오모 입점 매장의 통합 포인트!"
                content={
                    <>
                        '오모'는 오모를 통하여 결제가 이뤄질 시 <br />
                        1%의 적립금이 생성됩니다. 해당 적립금은 <br />
                        오모 가맹 매장에서 사용이 가능하며, 정산 시에 <br />
                        오모가 오프라인 매장에게 제공하는 방식입니다.
                    </>
                }
                image={
                    <img
                        src="/images/section4/phone5.png"
                        srcSet="/images/section4/phone5@2x.png 2x, /images/section4/phone5@3x.png 3x"
                        alt="포인트 적립"
                    />
                }
            />
        </div>
    );
};
