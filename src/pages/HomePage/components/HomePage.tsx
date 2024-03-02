import React from 'react';
import Layout from '../../../modules/Layout';
import HotTrips from '../../../modules/HotTrips';
import QuestionButton from '../../../modules/QuestionButton';
import Embark from '../../../modules/Embark';
import AllTrips from '../../../modules/AllTrips';
import Quote from '../../../modules/Quote';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main>
        <HotTrips/>
        <QuestionButton/>
        <Embark/>
        <AllTrips/>
        <Quote/>
      </main>
    </Layout>
  );
};

export default HomePage;