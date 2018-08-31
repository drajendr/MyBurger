import React, { Component } from 'react';
import Aux from '../../hoc/Common/common';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Classes from './Layout.css';
import Sidedrawer from '../../components/Navigation/SideDrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSidedrawer  : false
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