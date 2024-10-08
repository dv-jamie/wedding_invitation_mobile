import React from 'react';
import Cover from './components/Cover';
import Greetings from './components/Greetings';
import Location from './components/Location';
import Account from './components/Account';
import Gallery from './components/Gallery';
import Copyright from './components/Copyright';

import './common.css';
import styles from './App.module.css';
import Gnb from './components/Gnb';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.content_wrap}>
        <Cover />
        <Gnb scrollToSection={scrollToSection} />

        <div id="greeting">
          <Greetings />
        </div>

        <div id="location">
          <Location />
        </div>
        
        <div id="gallery">
          <Gallery />
        </div>
        
        <div id="account">
          <Account />
        </div>
        
        <div id="copyright">
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default App;
