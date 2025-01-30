
import './App.css';
import React from 'react';
import './style.css'
import {Button} from './class-components'
import {Calculator2} from './Calculator';
import {Eventdata} from './event-data'
import RefsFunc from './refs-func'
import MessageBox from './state-func';
import { userContext } from './context';
import Content from './context-content';

function App() {
  return (
    <>
      <userContext.Provider value={'Wasin Budprom'}>
        <Content />
      </userContext.Provider>  
    </>
  );
}

export default App;
