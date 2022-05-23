import React from 'react'
import './skillHolder';

const skillHolder = ({pic}) => {
  return (
    
    <div className="skillHolder">
            <img src={pic} alt="img" />
            <div className="cont">
              <h4>HTML/CSS</h4>
              <div className="bar">
                <div className="qty html">80%</div>
              </div>
            </div>
          </div>
  )
}

export default skillHolder;