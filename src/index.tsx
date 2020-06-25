import React from 'react';
import ReactDOM from 'react-dom';
import Base from './pages/base';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.less';

ReactDOM.render(
  <Router>
    <Base />
  </Router>,
  document.getElementById('root')
);
