import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div className='layout'>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" exact to='/' activeStyle={{
    color: "#0275d8"}}>Craig Wendel</NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/' activeStyle={{
          color: "#0275d8"}}>Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about' activeStyle={{
          color: "#0275d8"}}>About Me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/portfolio' activeStyle={{
          color: "#0275d8"}}>Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact' activeStyle={{
          color: "#0275d8"}}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/references' activeStyle={{
          color: "#0275d8"}}>References</NavLink>
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
