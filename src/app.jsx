import './asset/scss/common.scss'
import Home from './containers/home/index'
import { render } from 'react-dom'
import React from 'react'

// console.log(render)
render( 
    <Home / > ,
    document.getElementById('root')
);