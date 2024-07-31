import React from 'react';
import Cover from './components/Cover';
import Greetings from './components/Greetings';
import Location from './components/Location';
import Gallery from './components/Gallery';

import './common.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.content_wrap}>
        <Cover />
        <Greetings />
        <Location />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
