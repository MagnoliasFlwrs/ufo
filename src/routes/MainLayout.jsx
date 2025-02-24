import React from 'react';
import Header from "@components/Site/Header.jsx";
import AppInfoBlock from "@components/Site/AppInfoBlock.jsx";
import ResultsBlock from "@components/Site/ResultsBlock.jsx";
import CoachBlock from "@components/Site/CoachBlock.jsx";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <AppInfoBlock/>
            <ResultsBlock/>
            <CoachBlock/>
        </>
    );
};

export default MainLayout;
