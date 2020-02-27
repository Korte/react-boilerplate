import React from 'react'
import ReactDom from 'react-dom'
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './App'
import './styles.css'
import DefaultErrorBoundary from './DefaultErrorBoundary';

if (process.env.NODE_ENV === 'development'){
    const axe = require('react-axe')
    axe(React, ReactDom, 1000)
}


ReactDom.render(    
    <DefaultErrorBoundary>
        <App/>
    </DefaultErrorBoundary>

, document.getElementById('app') )