import React from 'react';
import { Header, Segment, Divider, Tab, Grid, Container, Image } from 'semantic-ui-react';
import Headshot from '../images/Headshot.png';

const Home = () => (
  <Segment>
    <Header as='h2' floated='Left'>
       Welcome!
    </Header>
  
  <Divider clearing />

  <Image src={Headshot} size='medium' verticalAlign='left' />{' '}
      <p> New to coding but not shy of learning something new but is now a Full stack web developer. I'm currently employed as a Fraud Analyst. </p>
    <Divider />
  <p>Skills:</p>
  <p><img src="https://img.icons8.com/nolan/64/ruby-programming-language.png" /> <img src="https://img.icons8.com/nolan/64/react-native.png"></img> <img src="https://img.icons8.com/ios/50/000000/postgreesql.png"></img>
  <img src="https://img.icons8.com/nolan/64/adobe-lightroom.png" /> <img src="https://img.icons8.com/nolan/64/adobe-premiere-pro.png" /> <img src="https://img.icons8.com/nolan/64/adobe-premiere-pro.png"></img></p>
  </Segment>
)

export default Home;


{/* <Grid.Column>
<Image width='300' position='right' src={Headshot}/>
</Grid.Column> */}