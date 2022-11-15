import React, { Component, Fragment } from 'react';
import './App.css';
import Post from './components/Post';
import axios from 'axios';

class App extends Component {
  state = {
    post: []
  }

  getPostAPI = () => {
    axios.get('https://63738d85348e9472990fd849.mockapi.io/users')
    .then((result)=> {
      this.setState({
        post:result.data
      })
    })
  }

  componentDidMount(){
    this.getPostAPI();
  }
  
  handleRemove = (data) => {
    axios.delete(`https://63738d85348e9472990fd849.mockapi.io/users/${data}`).then((res)=>{
      this.getPostAPI()
    })
  }

  render() {
    return (
      <Fragment>
        <p className='section-title'>List Data</p>
        {this.state.post.map(post => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />
        })}
      </Fragment>
    )
  }
}

export default App;