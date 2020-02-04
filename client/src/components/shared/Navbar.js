import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => (

  <Menu>
    <Link to='/'>
      <Menu.Item position='right'>
        <h2>Somchay Keomanivong</h2>
      </Menu.Item>
    </Link>
    <Menu.Menu position='right'>
    <Link to='/about'>
      <Menu.Item>
        About
      </Menu.Item>
    </Link>

    <Link to='/project'>
      <Menu.Item>
        Projects
      </Menu.Item>
    </Link>

    <Link to='/contact'>
      <Menu.Item>
        Contact 
      </Menu.Item>
    </Link>

  </Menu.Menu>
  </Menu>
)
export default Navbar;

