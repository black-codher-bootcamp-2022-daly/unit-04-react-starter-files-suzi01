import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
    return<>
    <h1>My Bookcase</h1>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookcase" className='booklink'>Bookcase</Link></li>
        <li><Link to="/About">About</Link></li>
    </ul>
       
    </>
    
}

export default Header