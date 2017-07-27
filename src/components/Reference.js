import React, { Component } from 'react'
import '../styles/Reference.css'

export default class Reference extends Component {
  render () {
    return (
      <div className='reference-info'>
        <div className="card-non">
          <img className="card-img-top" src="https://www.freewordpressheaders.com/wp-content/gallery/computer/creative-computer-keyboard-header.jpg" alt="computer keybpoard" />
          <div className="card-block">
            <h4 className="card-title">References:</h4>
          </div>
        </div>
        <div className="card">
        <div className="card-header">
          <h3>Jesse Wolgamott</h3>
        </div>
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>Master Instructor | The Iron Yard</p>
            <footer>1.713.425.3797 | <cite title="Source Title">jesse@theironyard.com</cite></footer>
          </blockquote>
        </div>
        </div>
        <div className="card">
        <div className="card-header">
          <h3>Jay Motwani</h3>
        </div>
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>Director of Sales | Volusion</p>
            <footer>1.800.646.3517 | <cite title="Source Title">jay.motwani@volusion.com</cite></footer>
          </blockquote>
        </div>
        </div>
        <div className="card">
        <div className="card-header">
          <h3>Andy Steavens</h3>
        </div>
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>Vice President of Sales and Marketing | Corpus Christi Hooks Baseball Club</p>
            <footer>1.361.561.4665 | <cite title="Source Title">asteavens@cchooks.com</cite></footer>
          </blockquote>
        </div>
        </div>
      </div>
    )
  }
}
