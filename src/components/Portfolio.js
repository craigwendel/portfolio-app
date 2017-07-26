import React, { Component } from 'react'
import '../styles/Portfolio.css'
export default class Porfolio extends Component {
  render () {
    return (
      <div className='portfolio'>
        <div className="card">
          <img className="card-img-top" src="https://www.freewordpressheaders.com/wp-content/gallery/medical/stethoscope-and-computer-medical-service-header.jpg" alt="computer screen with stethoscope" />
          <div className="card-block">
          <div>
            <h2>Check out my Portfolio below!</h2>
          </div>
            <h4 className="card-title">React Projects</h4>
            <p className="card-text">Here's some React projects I recently completed!</p>
          </div>
        </div>
        <div className='project-flex'>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src='https://khms1.googleapis.com/kh?v=729&hl=en-US&x=95&y=179&z=9' alt="satelite view of an earthquake" />
              <div className="card-block">
                <h4 className="card-title">Earthquakes!</h4>
                <p className="card-text">This site records a list of all the earthquakes that have occurred in the past hour</p>
                <a href="https://craigwendel.github.io/simple-react-app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Earthquakes!</a>
                <p className="card-text"><small className="text-muted">Last updated 7 days ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://mars.nasa.gov/maps/explore-mars-map/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0//default/default028mm/2/1/2.png" alt="view of mars" />
              <div className="card-block">
                <h4 className="card-title">Mars Rover</h4>
                <p className="card-text">This site shows images on Mars using NASA's API</p>
                <a href="https://github.com/craigwendel/mars-rover" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the code for Mars Rover</a>
                <p className="card-text"><small className="text-muted">Last updated 14 hours ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://cdn4.iconfinder.com/data/icons/learn-1/26/17-256.png" alt="playlist" />
              <div className="card-block">
                <h4 className="card-title">Fire Jams!</h4>
                <p className="card-text">Submit your favorite songs on this playlist to become the life of the party, guaranteed!</p>
                <a href="https://craigwendel.github.io/react-playlist/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Fire Jams to add songs to the playlist</a>
                <p className="card-text"><small className="text-muted">Last updated 1 day ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className='language-flex'>
          <div className="card-block">
            <h4 className="card-title">Languages</h4>
            <p className="card-text">Here are some programming languages I'm currently learning!</p>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="https://pbs.twimg.com/profile_images/688801955020435456/JqsEWy2Z_400x400.png" alt="react js logo" />
              <div className="card-block">
                <h4 className="card-title">ReactJS</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg" alt="JavaScript logo" />
              <div className="card-block">
                <h4 className="card-title">JavaScript</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://www.shareicon.net/download/2016/06/19/603824_nodejs.ico" alt="node JavaScript logo" />
              <div className="card-block">
                <h4 className="card-title">Node.js</h4>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="http://www.djangobytes.net/img/html-logo.png" alt="html and css logo" />
              <div className="card-block">
                <h4 className="card-title">HTML5/CSS3</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
