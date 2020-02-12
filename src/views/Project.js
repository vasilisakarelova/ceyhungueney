import React from 'react'
import setAspectRatio from '../helpers/setAspectRatio'

function Project({ data }) {
  const { title, desc, preview } = data
  return (
    <div className='project-wrap'>
      <div className='project-img-wrap'>
        <img alt='case preview' src={preview} onLoad={(ev) => setAspectRatio(ev.currentTarget)}/>
      </div>
      <div className='project-desc'>{desc}</div>
    </div>
  )
}
export default Project
