import React, { Component } from 'react'
import setAspectRatio from '../helpers/setAspectRatio'

class About extends Component {
  render() {
    const { intro, photo } = this.props.data

    return (
      <div className="view">
        <div className="content">
          <div className="content--inner">
            <div className='about-img'>
              <img alt='ceyhun himself' src={photo} onLoad={(ev) => setAspectRatio(ev.currentTarget)}/>
            </div>
            <div className='about-text' dangerouslySetInnerHTML={{ __html: intro }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About
