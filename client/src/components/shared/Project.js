import React from 'react';
import { Header, Grid, Image, Card, GridColumn } from 'semantic-ui-react';

const Project = () => (
  <>
    <Header>My Projects</Header>
      <Grid divided='vertically' columns={3}>
          <Grid.Column a href = 'https://github.com/somchayk/gl' target='_'>
            <Card>
              <Image src='https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Grocery List</Card.Header>
                  <Card.Meta>
                   <span className='ruby'>React</span>
                  </Card.Meta>
                 <Card.Description>
                  Create a Grocery list that will allow you add items, cross off items, edit and delete items.                                                                            
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <a>
                  <img src="https://img.icons8.com/plasticine/32/000000/react.png" />
                </a>
              </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column a href = 'https://github.com/somchayk/doctors_appt' target='_'>
            <Card>
              <Image src='https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Doctor's Appointment</Card.Header>
                  <Card.Meta>
                   <span className='rails'>Rails</span>
                  </Card.Meta>
                 <Card.Description>
                  Create a Doctor's Appointment through Rails that allows a person to create themselves as a new user and set up a time, date and which doctor they would like to go through.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <a>
                 <img src="https://img.icons8.com/office/22/000000/ruby-programming-language.png" />
                </a>
              </Card.Content>
              </Card>
            </Grid.Column>


            <Grid.Column a href ='https://www.youtube.com/watch?v=OGEQv1PEacs&t=14s' target='_'>
            <Card>
              <Image src='https://images.unsplash.com/photo-1543185377-99cd16011803?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Doctor's Appointment</Card.Header>
                  <Card.Meta>
                   <span className='rails'>Rails</span>
                  </Card.Meta>
                 <Card.Description>
                  I was started to practice editing videos. The channel mainly contest of fishing but started to get into cinematic and vlogs.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <a>
                 <img src="https://img.icons8.com/cotton/32/000000/youtube.png" />
                </a>
              </Card.Content>
              </Card>
            </Grid.Column>

    </Grid>
  </>
)



export default Project;