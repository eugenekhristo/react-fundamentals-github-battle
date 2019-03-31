import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return ( 
    <nav className='nav'>
      <NavLink activeClassName='active' to='/' exact>Home</NavLink>
      <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
      <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
    </nav>
   );
}
 
export default Nav;