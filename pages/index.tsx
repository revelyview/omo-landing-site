import React from 'react';
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
import { MobileSection2 } from '../components/Mobile/section2';

const Home = () => {
    const images = [
        './images/001.png',
        './images/002.png',
        './images/003.png',
        './images/004.png',
        './images/005.png',
        './images/006.png',
        './images/007.png',
        './images/008.png',
        './images/009.png',
        // '/images/010.png',
        './images/011.png',
    ];
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>OMO </title>
                <link href="./css/main.css" rel="stylesheet" />
            </Head>
            {/* <MobileSection1 />
            <MobileSection2 /> */}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
            {/* <article className="container">
                {images.map((image, index) => {
                    return <ImageSection key={image} image={image} alt={`${index + 1} 번째 이미지`} />;
                })}
            </article> */}
        </>
    );
};

export default Home;
