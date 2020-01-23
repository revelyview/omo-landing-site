import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Footer } from '../components/Desktop/Footer';
import { Complete } from '../components/Desktop/Complete';
import { MobileComplete } from '../components/Mobile/Complete';
import { MobileFooter } from '../components/Mobile/Footer';
const CompletePage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window) {
            const width = window.document.body.clientWidth;

            setIsMobile(prevState => width < 450);
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
            <div className="root">
                {isMobile ? (
                    <>
                        <MobileComplete />
                        <MobileFooter />
                    </>
                ) : (
                    <>
                        <Complete />
                        <Footer />
                    </>
                )}
            </div>
        </>
    );
};

export default CompletePage;
