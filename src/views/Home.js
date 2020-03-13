import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import setAspectRatio from '../helpers/setAspectRatio'
import intro from '../assets/Intro.png'

class Home extends Component {
  render() {
    return(
      <div className='home-intro'>
        <NavLink strict exact to='/work' className='home-intro-link'>
          <img alt='intro' src={intro} onLoad={ev => ev.currentTarget.style.opacity = '1'}/>
        </NavLink>
      </div>
    );
  }
}

export default Home
