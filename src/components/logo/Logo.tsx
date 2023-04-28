import React from 'react';
import logo from './istockphoto-1256299996-612x612.jpg';
import classes from './Logo.module.scss'

const Logo: React.FC = () => (
    <img
      className={classes.logo}
      src={logo}
      alt="логотип"
    />
)

export default Logo;
