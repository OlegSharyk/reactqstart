'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import Logo from './components/Logo';

React.render(
    <h1>
        <Logo /> Welcome to App!
    </h1>,
    document.getElementById('app')
);