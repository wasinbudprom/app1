import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css'
import { Header, Content, Footer } from './func-components';
import Calendar from './class-components'

function App() {
  return (
    <>
        <Header/>
        <p><center><Calendar/></center></p>
        <Content/>
        <Footer/>
        {/* <h2>DeveloperThai.com</h2>
        <div className='title'>React & React Native</div> */}
    </>
  );
}

export default App;
