import React from 'react';
import {Typography,Button, Container,makeStyles} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import './create.css'

const useStyles= makeStyles({
    btn:{
        color: '#fff',
        fontSize:17
    },
    h1:{
        color: '#fff',
    
    }

});

function Create(){
    const classes = useStyles();
    return(
        <div className="container">
            <div className="contents">
        <Container >
        <Typography variant='h3' component='h1'className={classes.h1} >Create Note</Typography>
        <Button variant='contained' color='secondary' className={classes.btn}      endIcon={<SendIcon/>} >Submit</Button>
        </Container>
        </div>
        </div>
        )  
};

export default Create;
