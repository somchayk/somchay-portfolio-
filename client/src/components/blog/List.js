// import React from 'react';
// import Blog from './Blog';
// import { Card, Grid, Button, Icon } from 'semantic-ui-react';

// const List = ({ blogs, deleteBlog, updateBlog }) => (
  
//     <Grid columns={3}>
//       {blogs.map(blog => (
//         <Grid.Column style={{margin: "2em 0em"}}>

//         <Card>
//           <Card.Content>
//             <Card.Header> {blog.title} </Card.Header>
//             <Card.Description>
//               {blog.body}
//             </Card.Description>
//               <Button color='pink' onClick={ () => deleteBlog(blog.id) }>
//                 <Icon name='trash' />
//                 </Button>

//                 <Button color='green' onClick={ () => updateBlog(blog.id) }>
//                 <Icon name='pencil' />
//                 </Button>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//         ))}
//     </Grid>

// )

// export default List