import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Complete } from '../components/Complete';

const CompletePage = () => {
    return (
        <>
            <Head>
                <title>OMO </title>
                <link href="./css/main.css" rel="stylesheet" />
            </Head>
            <Complete />
            <Footer />
        </>
    );
};

export default CompletePage;
