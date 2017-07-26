import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header className='header'>

          <div class="jumbotron">
            <div className="card">
              <img className="card-img-top" src="http://i.imgur.com/EdiUBOu.jpg" alt="hands on a computer keyboard" />
            </div>
            <h1 className="display-3">Welcome to the life of Craig!</h1>
            <hr className="my-4" />
            <h4>Click below to learn a little more information about me and my current journey here at the Iron Yard!</h4>
            <p className="lead">
              <Link to='/aboutme' className="btn btn-primary btn-lg" role="button">About Me</Link>
            </p>
          </div>
        </header>
      </div>
    )
  }
}
