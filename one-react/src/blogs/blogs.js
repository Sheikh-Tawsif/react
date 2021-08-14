import React from 'react';
import './blogs.css';
import { Typography , Container ,Button } from '@material-ui/core';

function Blogs(){
    return(
        <Container className="blogs">
            <div className="articles">
                <br/>
            <Typography variant='h2' gutterBottom>Blogs</Typography>
            <Typography variant='body1' gutterBottom>Welcome,this is my blog page where you can find thousands of articles on coding which you can read for absolutely free.</Typography>
            </div>
            <Button variant="contained" color='secondary' >Read blogs</Button>
        </Container>

    )
}

export default Blogs;