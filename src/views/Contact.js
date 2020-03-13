import React, { Component } from 'react'
import * as css from 'classnames'
import setAspectRatio from '../helpers/setAspectRatio'

class Contact extends Component {
  render() {
    const { intro, photo } = this.props.data

    return (
      <div className="view">
        <div className="content">
          <div className="content--inner">
            <div className='contact-text' dangerouslySetInnerHTML={{ __html: intro }}></div>
            <div className='contact-img'>
              <div className={css('contact-img-wrapper', {'is-empty': photo === null})}>
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
