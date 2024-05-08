import React from 'react'
import './TitleTypeOne.css'
import victor from '../../assets/victor.png'

export default function TitleTypeone({ ClassName, Title, TitleTop }) {
  return (
    <div className={`titleTypeOne ${ClassName} `}>
      <small>{TitleTop}</small>
      <div className='heading-h'>
        <div className="line"></div>
        <h2>{Title}</h2>
        <div className="line"></div>
      </div>
      <img src={victor} alt="" className='victor' />
    </div>
  )
}
