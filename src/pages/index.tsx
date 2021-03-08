import { FC } from 'react';
import Scene from '@comp/Scene';
import Head from 'next/head';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Vivel Engine Demo</title>
      </Head>
      <Scene />
    </div>
  );
};

export default Home;
