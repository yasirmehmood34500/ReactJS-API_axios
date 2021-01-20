import React, { Component } from 'react';
import axios from 'axios'

const api=axios.create({
  baseURL : 'https://clients.timetechsol.com/api/jobportal/'
})
class App extends Component{
 
  constructor(){
    super();
    api.get('/viewJob').then(res => {
      console.log(res.data)
    }).catch(console.log)
  }
 
  render(){
    return(
      <h1>Hello</h1>
    )
  }
}

export default App;
