import React from 'react'
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    return (
        <div>
            {userAgent}
        </div>
    )
}

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
