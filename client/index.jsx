import React from 'react';
import ReactDOM from 'react-dom';
import LOGO from '../images/images.jpg';

const Index = () => {
  return (
    <div className="container">
      <div>TIW 8 TP1!</div>
      <img src={LOGO} alt="Logo" />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
