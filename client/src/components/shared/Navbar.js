import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
      <img src="https://img.icons8.com/nolan/45/000000/home.png" />
        Home
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
        About
        <img src="https://img.icons8.com/ios/45/000000/person-pointing.png"></img>
      </Menu.Item>
    </Link>
    <Link to='/project'>
      <Menu.Item>
      <img src="https://img.icons8.com/color/45/000000/intel-isef.png"/>
        Projects
      </Menu.Item>
    </Link>
    <Link to='/contact'>
      <Menu.Item>
        Contact Me
        <img src="https://img.icons8.com/nolan/45/000000/email.png"></img>
      </Menu.Item>
    </Link>
  </Menu>
)


export default Navbar