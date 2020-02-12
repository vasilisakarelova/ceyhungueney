import React, { Component } from 'react'
import setAspectRatio from '../helpers/setAspectRatio'

import contact from '../assets/contact.png'

class Contact extends Component {
  render() {
    const { intro, photo } = this.props.data
    return (
      <div className="view">
        <div className="content">
          <div className="content--inner">
            <div className='contact-text' dangerouslySetInnerHTML={{ __html: intro }}></div>
            <div className='contact-img'>
              <div className='contact-img-wrapper'>
                <img alt='office' src={photo} onLoad={(ev) => setAspectRatio(ev.currentTarget)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
