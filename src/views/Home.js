import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import intro from '../assets/Intro.png'

class Home extends Component {
  render() {
    return(
      <div className='home-intro'>
        <NavLink strict exact to='/work'>
          <img alt='intro' src={intro}/>
        </NavLink>
      </div>
    );
  }
}

export default Home
