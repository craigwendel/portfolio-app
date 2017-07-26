import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div className='layout'>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to='/'>Craig Wendel</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/aboutme'>About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/portfolio'>Portfolio</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/craigwendel/" target='_blank' rel="noopener noreferrer">GitHub</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://medium.com/@wendelcraig" target='_blank' rel="noopener noreferrer">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/craig-wendel-86719754/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </nav>

        {this.props.children}


        <footer className='footer'>
          <nav className="navbar navbar-light bg-faded">
            <h3 className="navbar-brand mb-0">Craig A Wendel | Copyright 2017</h3>
          </nav>
        </footer>
      </div>
    )
  }
}
