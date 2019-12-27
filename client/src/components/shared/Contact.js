import React from 'react';
import { List, Image } from 'semantic-ui-react'

const Contact = () => (
  <List horizontal relaxed>
    <h2>Please reach me at any of the following:</h2>
    <List.Item a href="mailto:Somchayk@yahoo.com" target='_'>
      <Image avatar src='https://img.icons8.com/nolan/32/000000/email-sign.png' />
      <List.Content>
        <List.Header as='a'>Email</List.Header>
      </List.Content>
    </List.Item>
    <List.Item a href="https://github.com/somchayk" target='_'>
      <Image avatar src='https://img.icons8.com/nolan/32/000000/github.png' />
      <List.Content>
        <List.Header as='a'>Github</List.Header>
      </List.Content>
    </List.Item>
    <List.Item a href='https://www.linkedin.com/in/somchay-keomanivong-85207a188/' target='_'>
      <Image avatar src="https://img.icons8.com/nolan/32/000000/linkedin.png" />
      <List.Content>
        <List.Header as='a'>linkedin</List.Header>
      </List.Content>
    </List.Item>
    <List.Item a href='https://www.youtube.com/channel/UCT7SN-CrB0UaUnQ0XP7RmXg' target='_'>
      <Image avatar src='https://img.icons8.com/cotton/32/000000/youtube.png' />
      <List.Content>
        <List.Header as='a'>Youtube</List.Header>
      </List.Content>
    </List.Item>
  </List>
)







export default Contact;