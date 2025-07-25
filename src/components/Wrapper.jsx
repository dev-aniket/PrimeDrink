import React from 'react';
import Background from '../components/Background';
import Foreground from '../components/Foreground';
import './Wrapper.css'; // import CSS separately

const Wrapper = () => {
  return (
    <section id='hydration' className="wrapper-section">
      <div className="background-container">
        <Background />
      </div>
      <div className="foreground-container">
        <Foreground />
      </div>
    </section>
  );
};

export default Wrapper;