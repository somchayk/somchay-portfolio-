import React, { Component } from 'react';
import axios from 'axios';
// import List from './List';
import BlogForm from './BlogForm';


class Blog extends Component {
  state = { blogs: [], adding: false } 

  componentDidAmount() {
    axios.get('/api/blogs')
      .then( rest => {
        this.setState({ blogs: rest.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  toggleAdd = () => this.setState({ adding: !this.state.adding })

  addBlog = (blog) => {
    axios.post('api/blogs', blog)
      .then( res => {
        const { blogs } = this.state
        this.setState({ blogs: [...blogs, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  updateBlog = (id, blog) => {
    axios.put(`/api/blogs${id}`, blog)
      .then( res => {
        const blogs = this.state.blogs.map (b =>{
          if (b.id === id) {
            return res.data
          }
          return b
        })
        this.setState({ blogs })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteBlog = (id) => {
    axios.delete(`api/blogs/${id}`)
      .then(res => {
        const { blogs } =this.state
        this.setState({ blogs: blogs.filter (b => b.id !== id)})
      })
      .catch( err => {
        console.log(err)
      }) 
  }


  render() {
    const { adding } = this.state
    return(
      <>
        <h1>Blogs</h1>
       {
        adding ?
        <BlogForm addBlog={this.addBlog} toggleAdd={this.toggleAdd} />
        :
        <button onClick={this.toggleAdd}>Add Blog</button>
        }
        <List blogs={this.state.blogs} deleteBlog={this.deleteBlog} updateBlog={this.updateBlog} />
      </>
    )
  }
}

export default Blog;