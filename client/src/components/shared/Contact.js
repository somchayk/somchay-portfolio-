import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react'

const Contact = () => (
  <>
    <h1>You can reach me at</h1>

  <List>
    <List.Item>
    <img src="https://img.icons8.com/nolan/32/000000/email-sign.png" />
      <List.Content>
        <a href="mailto:Somchayk@yahoo.com">Somchayk@yahoo.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
    <img src="https://img.icons8.com/nolan/32/000000/github.png"></img>
      <List.Content>
        <a href='https://github.com/somchayk'>https://github.com/somchayk</a>
      </List.Content>
    </List.Item>
    <List.Item>
    <img src="https://img.icons8.com/nolan/32/000000/linkedin.png"/>
      <List.Content>
        <a href='https://github.com/somchayk'>Linkedin</a>
      </List.Content>
    </List.Item>
  </List>
</>
)





export default Contact;