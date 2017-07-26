import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class About extends Component {
  render () {
    return (
      <div className='About'>
        <div className="card">
          <img className="card-img-top" src="http://www.ridadev.com/images/header_Houston_1000.png" alt=" Houston Texas skyline" />
          <div className="card-block">
            <h4 className="card-title">About Me</h4>
            <p className="card-text">Here's a little more about me and my journey here at the Iron Yard</p>
            <p className="card-text">I moved from Austin Texas in May to attend the Iron Yard here in Houston, TX.  It's been a great past few months and I'm really loving every minute of class learning more about coding languages and frameworks.  I'm hoping to get a job here after graduation and work as a junior developer.  If not I may have to go work back at the farm with my pops...which would suck.  I went to school for a reason...I'm too lazy to be a farmer and that's pretty hard work too.  Check out the link below to view my portfolio and some of my projects!</p>
            <Link to='/portfolio' className="btn btn-primary">View My Porfolio</Link>
        </div>
      </div>
    </div>
    )
  }
}
