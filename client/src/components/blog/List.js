import React from 'react';
import Blog from './Blog';
import { Card, Grid, Button, Icon } from 'semantic-ui-react';

const List = ({ blogs, deleteBlog, updateBlog }) => (
  <>
    <Grid divided='vertically' columns={200}>
      {blogs.map(blog => (
        <Card>
          <Card.Content>
            <Card.Header> {blog.title} </Card.Header>
            <Card.Description>
              {blog.body}
            </Card.Description>
              <Button color='pink' onClick={ () => deleteBlog(blog.id) }>
                <Icon name='trash' />
                </Button>
          </Card.Content>
        </Card>
        ))}
    </Grid>
  </>
)

export default List