import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>

        Home
      </Menu.Item>
    </Link>
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
    <Link to='/blog'>
      <Menu.Item>
        Blogs
        
      </Menu.Item>
    </Link>
  </Menu>
)
export default Navbar;

