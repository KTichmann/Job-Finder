import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    const style = {
        backgroundColor: '#ccceee',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '15vw',
        fontSize: '2rem',
        textTransform: 'uppercase',
    }

    const linkStyle = {
        color: '#222',
        textDecoration: 'none',
        margin: '10px 0px',
        padding: '20px 5px',
        backgroundColor: 'white',
        textAlign: 'center'
    }
    
    return(
    <div style={style}>
        <Link style={linkStyle} to='/'>Home</Link>
        <Link style={linkStyle} to='/preferences'>Options</Link>
        <Link style={linkStyle} to='/list'>Job List</Link>
    </div>
    )
}

export default NavBar;