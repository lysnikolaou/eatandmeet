import * as styles from './index.module.scss';
import * as colors from './colors';
import cx from 'classnames';
import React from 'react';

const Button = (props) => {
    return (
        <button
            className={cx({
                [styles.btn_jungle]: props.color === colors.GREEN,
                [styles.btn_raspberry]: props.color === colors.RED,
            }, styles.btn)}
            {...props}
        />
    );
};

export default Button;
