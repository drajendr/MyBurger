import React from 'react';
import Aux from '../../hoc/common';
import Classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, side drawer and backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;