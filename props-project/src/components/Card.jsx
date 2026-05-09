import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div className="card">
        <div>
            <div className="top">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small/amazon-logo-amazon-icon-transparent-free-png.png" alt="" />
          <button>Save <Bookmark size={12} /> </button>
        </div>
        <div className="center">
          <h3>amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
              <h3>$120/hr</h3>
              <p>Noida, India</p>
          </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card