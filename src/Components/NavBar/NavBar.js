import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import NavBarListItemHandler from './NavBarListItemHandler'

const NavBar = () => {
    return(
    <div id="navBar">
        <div className="navHeader">
            <Link to="/"><Icon name="briefcase" /></Link>
            <Link className="main" to='/'>JobDer</Link>
            <Link className="options" to="/preferences"><Icon name="setting" /></Link>
        </div>
        <Link className="navLink" to='/list'>Job List</Link>
        <NavBarListItemHandler />
    </div>
    )
}

export default NavBar;