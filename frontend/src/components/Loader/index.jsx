import React from 'react';
import loaderGIF from '../../static/images/loader/loader.gif'
import './index.css'

export default function Index(){
    return(
        <img
            className={"loader"}
            alt="loading"
            src={loaderGIF}
        />
    );
}

