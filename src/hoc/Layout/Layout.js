import React, {Component} from 'react';
import Aux from '../Auxilary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    render(){
    return(    
        <Aux>
            <Toolbar menuClicked={this.sideDrawerOpenHandler}/>
            <SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerClosedHandler} />
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
}

export default Layout;