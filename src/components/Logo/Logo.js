import React from 'react';
import classes from './Logo.css';
import LogoImg from '../../assets/images/Logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={LogoImg} alt="KV Burgers"/>
    </div>
);

export default logo;