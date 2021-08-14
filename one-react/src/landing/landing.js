import React from 'react';
import {Typography,Button} from '@material-ui/core';
import '@fontsource/roboto';
import './landing.css';

function Landing(){
    return(
        <main>
            <Typography variant="h2" className="h1" >Styler</Typography>
            <br/>
            <div className="intro">
                <Typography variant='body1' className='p'>My name is Tawsif.I am a professional web-developer.Looking forward to provide you with some precious value.Thank you for choosing my service. I hope you like it.</Typography>
            </div>
            <Button variant="contained" color="primary" style={{fontSize:'1rem'}}>Start your journey</Button>
        </main>
    )
}

export default Landing;