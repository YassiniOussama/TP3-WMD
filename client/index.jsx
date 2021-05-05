import React from 'react';
import ReactDOM from 'react-dom';
import LOGO from '../images/images.jpg';
import DataChat from './Components/DataChat.jsx';

const Index = () => {
  return (
    <DataChat />
   
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
