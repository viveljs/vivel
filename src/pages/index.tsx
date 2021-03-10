import Scene from '@comp/Scene';
import Head from 'next/head';
import scenes from '@conf';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Vivel Engine Demo</title>
      </Head>
      <Scene />
      {console.log(scenes)}
    </div>
  );
};

export default Home;
