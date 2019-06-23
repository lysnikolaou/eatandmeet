import React from 'react';
import * as style from './index.module.scss';

const LoadingComponent = ({text = 'Loading...'}) => {
    return (
        <div className={style.loader_container}>
            <div className={style.loader} />
            {
                {text} &&
                <div className={style.typewriter}>
                    {text}
                </div>
            }
        </div>
    );
};

export default LoadingComponent;
