import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';
import '@fontsource/roboto';
import './index.css';
import Landing from './landing/landing';
import Blogs from './blogs/blogs';
import Create from './create/create'


ReactDOM.render(
    <div className="whole">
            <Typography variant="h1" className="h2" align="center" color="primary" style={{marginLeft:'4.5%'}} gutterBottom >React-website</Typography>    
    <Landing />
    <br/>
    <Blogs />
    <br/>
    <Create />
    </div>,
    document.getElementById('root')
);
