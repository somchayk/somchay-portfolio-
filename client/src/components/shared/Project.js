import React from 'react';
import { Header, Grid, Image, Card, GridColumn } from 'semantic-ui-react';

const Project = () => (
  <>
    <Header>My Projects</Header>
      <Grid divided='vertically' columns={3}>
          <Grid.Column a href = 'https://hackathon-creator.herokuapp.com/' target='_'>
            <Card>
              <Image src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Hackathon</Card.Header>
                  <Card.Meta>
                   <span className='ruby'>Rails on React</span>
                  </Card.Meta>
                 <Card.Description>
                  Create a website for DevPoint labs to use during their hackathon(midterms). There's a student and admin side. Student side they can see a timer to when the event ends, the group they are assigned to, rubric and submit their github to be graded. Admin side they can start and end both countdown and lunch timers. Have a tasks for each TA to complete.                                                                        
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <a>
                  <img src="https://img.icons8.com/plasticine/32/000000/react.png" />
                </a>
              </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column a href = 'https://repl.it/@MasonMan/Ruby-Casino' target='_'>
            <Card>
              <Image src='https://images.unsplash.com/photo-1537154835319-14f43d91ea98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Casino</Card.Header>
                  <Card.Meta>
                   <span className='rails'>Ruby</span>
                  </Card.Meta>
                 <Card.Description>
                  Created a casino where you can enter your name and amount of money you would like to start out with. Pick between 3 different games to test out your luck.
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
                <Card.Header>Japan Cinematic</Card.Header>
                  <Card.Meta>
                   <span className='youtube'>Premiere Pro</span>
                  </Card.Meta>
                 <Card.Description>
                  I was started to practice editing videos using Adobe Premire Pro and Premire Rush. The channel mainly contest of fishing but started to get into cinematic and vlogs.
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