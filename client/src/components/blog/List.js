import React from 'react';
import Blog from './Blog';
import { Table } from 'semantic-ui-react';

const List = ({ blogs, deleteBlog, updateBlog }) => (
  <>
    <Table celled>
      <Table.Body>
        {blogs.map(blog => (
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title: {blog.title}</Table.HeaderCell>
              <Table.HeaderCell>Body: {blog.body}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        ))}
      </Table.Body>
    </Table>
  </>
)

export default List