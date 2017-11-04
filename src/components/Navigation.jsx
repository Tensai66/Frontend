import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <div>
      <div className='navigationPlaceholder'/>            
        <div className='navigationContainer'>
          <div className='navigationContent'>
            <Link to='/' style={{textDecoration: 'none'}}>
              <h4 className='navigationLogo'>Pelycan</h4>
            </Link>
            <span className='navigationLogins'>
              <Link to='/login' className='linkStyles'>Login</Link>
              <Link to='/signup' className='linkStyles'>Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
