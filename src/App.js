import React from 'react';
import Header from './components/Header';
import Cover from './components/Cover';
import Detail from './components/Detail';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import './common.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.content_wrap}>
        <Header />
        <Cover />
        <Detail />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
