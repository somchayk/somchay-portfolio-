import React from 'react';
import { Header, Image, Segment, Divider, Tab, Container, Grid } from 'semantic-ui-react';
import Headshot from '../images/Group.jpeg';



const About = () => (
  <Segment>
    <Tab.Pane align='center' attached={false}>
    <div>
      <Header as='h2'>Something about me</Header>
      <Divider/>
      <Grid stackable>
        <Grid.Row columns='equal'>
          <Grid.Column style={{marginLeft: '34px'}}>
            <Container textAlign='justified'>
              <p style={{fontSize: 16}}>
                I've never been big into going into universities because it was always so expensive
                and knew that it wasn't for me. It took me a long time to figure out what I wanted 
                to do in life. I went to a community college to get a assoicates in Sociology.
                That did not work out the way I thought and then came across DevPoint Labs and now I know what to do. 
                That thing is <b>Coding</b>
              </p>
              <p style={{fontSize: 16}}>
                I was born in Utah but lived in Portland, OR for 13 years.
                If I were to pick where to live between the two it would have to be
                Utah because I love the outdoors.
                First generation Asian-american in my family.
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Image width='300' position='right' src={Headshot}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Tab.Pane>

  </Segment>
)


export default About;





