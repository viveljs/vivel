import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <>
      <h1>my first snowpack+react app</h1>
      <h2>hello ❄️Snowpack❄️</h2>
    </>
  );
};
render(<App />, document.getElementById('root'));
