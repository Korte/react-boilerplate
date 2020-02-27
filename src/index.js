import React from 'react'
import ReactDom from 'react-dom'
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './App'
import './styles.css'
import DefaultErrorBoundary from './DefaultErrorBoundary';

ReactDom.render(    
    <DefaultErrorBoundary>
        <App/>
    </DefaultErrorBoundary>

, document.getElementById('app') )