import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <div className='contact-info'>
        <div className="card">
          <img className="card-img-top" src="http://www.jillschmidtpr.com/wp-content/uploads/2015/12/contact-header-image.jpg" alt="contact info" />
          <div className="card-block">
            <h4 className="card-title">Contact</h4>
          </div>
        </div>
        <div className='list-information' style={{marginTop: '3%'}}>
            <ul className="list-group">
            <li className="list-group-item">Name: Craig Wendel</li>
            <li className="list-group-item">Phone: 1.979.541.7825</li>
            <li className="list-group-item">Email: wendelcraig@gmail.com</li>
            <li className="list-group-item"><a href="https://github.com/craigwendel/" target='_blank' rel="noopener noreferrer">GitHub</a></li>
            <li className="list-group-item"><a href="https://medium.com/@wendelcraig" target='_blank' rel="noopener noreferrer">Blog</a></li>
            <li className="list-group-item"><a href="https://www.linkedin.com/in/craig-wendel-86719754/" target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
            <li className="list-group-item"><a href="https://twitter.com/Craig_Wendel" target='_blank' rel="noopener noreferrer">Twitter</a></li>
            <li className="list-group-item"><a href="https://www.facebook.com/cwendel2" target='_blank' rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">For a list of References click the button below:</h4>
            <a href="/references" className="btn btn-primary">References</a>
          </div>
        </div>
      </div>
    )
  }
}
