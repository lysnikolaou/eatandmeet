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
            }, props.className, styles.btn, 'btn',)}
            type={props.type}
            value={props.value}
            onClick={props.onClick}
            onChange={props.onChange}
            name={props.name}
        >
            {props.children}
        </button>

    );
};

export default Button;
