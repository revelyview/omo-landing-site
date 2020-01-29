import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ImageSection } from '../components/ImageSection';
import { Section1 } from '../components/Desktop/Section1';
import { Section2 } from '../components/Desktop/Section2';
import { Section3 } from '../components/Desktop/Section3';
import { Section4 } from '../components/Desktop/Section4';
import { Section5 } from '../components/Desktop/Section5';
import { Section6 } from '../components/Desktop/Section6';
import { Footer } from '../components/Desktop/Footer';

import { MobileSection1 } from '../components/Mobile/Section1';
import { MobileSection2 } from '../components/Mobile/Section2';
import { MobileSection3 } from '../components/Mobile/Section3';
import { MobileSection4 } from '../components/Mobile/Section4';
import { MobileSection5 } from '../components/Mobile/Section5';
import { MobileSection6 } from '../components/Mobile/Section6';
import { MobileFooter } from '../components/Mobile/Footer';
import { NotSupport } from '../components/Desktop/NotSupport';
import { Loading } from '../components/Desktop/Loading';

const usingIE = (ua: string) => {
    const msie = ua.indexOf('MSIE ');

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return version number
        // alert(parseInt(ua.substring(msie + 5, ua.indexOf('.', msie))));
        return true;
    } // If another browser, return 0
    else {
        // alert('otherbrowser');
        return false;
    }
};

const Mobile = () => {
    return (
        <>
            <MobileSection1 />
            <MobileSection2 />
            <MobileSection3 />
            <MobileSection4 />
            <MobileSection5 />
            <MobileSection6 />
            <MobileFooter />
        </>
    );
};

const Desktop = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
        </>
    );
};
interface MainProps {
    isMobile: boolean;
}
const Main = ({ isMobile }: MainProps) => {
    return isMobile ? <Mobile /> : <Desktop />;
};

const Home = () => {
    // const images = [
    //     './images/001.png',
    //     './images/002.png',
    //     './images/003.png',
    //     './images/004.png',
    //     './images/005.png',
    //     './images/006.png',
    //     './images/007.png',
    //     './images/008.png',
    //     './images/009.png',
    //     // '/images/010.png',
    //     './images/011.png',
    // ];

    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isIE, setIsIE] = useState(false);

    useEffect(() => {
        if (window) {
            const width = window.document.body.clientWidth;

            setIsMobile(prevState => width < 450);

            const handlerWindowResize = () => {
                const _width = window.document.body.clientWidth;
                setIsMobile(prevState => _width < 450);
            };
            window.addEventListener('resize', handlerWindowResize);

            const ie = usingIE(window.navigator.userAgent);
            setIsIE(ie);
            setLoading(false);
            return () => {
                window.removeEventListener('resize', handlerWindowResize);
            };
        }
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>OMO </title>
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
                <link href="./css/main.css" rel="stylesheet" />
            </Head>
            {loading ? <Loading /> : isIE ? <NotSupport /> : <Main isMobile={isMobile} />}

            {/* <article className="container">
                {images.map((image, index) => {
                    return <ImageSection key={image} image={image} alt={`${index + 1} 번째 이미지`} />;
                })}
            </article> */}
        </>
    );
};

export default Home;
