import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header className='header'>

          <div className="jumbotron">
            <div className="card">
              <img className="card-img-top" src="http://i.imgur.com/EdiUBOu.jpg" alt="hands on a computer keyboard" />
            </div>
            <h1 className="display-3">Welcome to the life of Craig!</h1>
            <hr className="my-4" />
            <h4>Click below to learn a little more information about me and my current journey here at the Iron Yard, check out my portfolio, or contact me!</h4>
            <span className="lead">
              <Link to='/about' className="btn btn-primary btn-lg" role="button">About Me</Link>
              <Link to='/portfolio' className="btn btn-primary btn-lg" role="button">Portfolio</Link>
              <Link to='/contact' className="btn btn-primary btn-lg" role="button">Contact</Link>
            </span>
          </div>
        </header>
      </div>
    )
  }
}
