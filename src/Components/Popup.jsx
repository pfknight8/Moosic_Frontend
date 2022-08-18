import React from 'react'
import './Popup.css'

const Popup = (props) => {
  return (
    <div className="Popup-Box">
        {props.content}
    </div>
  )
}

export default Popup