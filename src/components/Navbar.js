import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.about}</a>
          </li>
        </ul>
        <div className={`form-check form-switch mx-2 text-${props.mode==="dark" ? "light":"dark"}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleTheme}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.write}</label>
        </div>
        <div className={`form-check form-switch mx-2 text-${props.mode==="dark" ? "light":"rgb(0 90 90)"}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleGreenMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.writegreen}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={   //for the checking of the types of the props to caught the error in the econsole
    title: PropTypes.string,  
    about: PropTypes.string
}
Navbar.defaultProps = {      //set the default values for the props if not passed
    title:'Add title',
    about: 'about'
}