import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Complete } from '../components/Complete';

const CompletePage = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>OMO </title>
                <link href="./css/main.css" rel="stylesheet" />
            </Head>
            <div className="root">
                <Complete />
                <Footer />
            </div>
        </>
    );
};

export default CompletePage;
