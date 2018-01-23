import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }

    return (
        <Aux>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        <Backdrop show={props.show} clicked={props.clicked}/>
        </Aux>
    );
}

export default sideDrawer;