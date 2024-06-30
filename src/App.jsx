import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React, { useContext } from 'react';

import { Colorcontext } from './component/useContext';

function App() {
  //5- use context
  const { data, changeData } = useContext(Colorcontext);
  changeData('green');
  return <div>{data}</div>;
}
export default App;
 