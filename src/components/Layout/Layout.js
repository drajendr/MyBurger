import React, { Component } from 'react';
import Aux from '../../hoc/common';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Classes from './Layout.css';
import Sidedrawer from '../Navigation/SideDrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSidedrawer  : true
    }

    sidedrawerCloseHandler = () => {
        this.setState( { showSidedrawer : false } );
    };

    toogleDrawerHandler = () => {
        this.setState( ( prevstate ) => { return { showSidedrawer: !prevstate.showSidedrawer } });
    }

    render(){
        return(
        <Aux>
            <Toolbar clickToogle = { this.toogleDrawerHandler } />
            <Sidedrawer open ={ this.state.showSidedrawer } closed = { this.sidedrawerCloseHandler } />
            <main className={Classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
} 

export default Layout;