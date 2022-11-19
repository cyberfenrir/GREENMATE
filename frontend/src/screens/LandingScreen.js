import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import '../app.css'
import landingpic from '../assets/landing_img.png'

function LandingScreen() {
  return (
    <div className="float_container" id="home">
    <div className="float-child ">
      <h1 id='center-elements'>High quality plants and seeds, directly from your local sellers.</h1>
      <span style={{ margin: "2rem 0" }} className = "center-elements-subtext">
        Buy the best seeds, sapplings and gardening tools from the best sellers in your city and around the country.
      </span>
      <LinkContainer  to = "/Home">
          <Nav.Link >
          <Button variant="success me-5" className = "center-elements-subtext">Shop Now</Button>
          </Nav.Link>
          </LinkContainer>
    </div>

    <div className="float-child ">
    <img src ={landingpic} alt="LandingImg" className='LandingImg' />
    </div>
  </div>
  )
}

export default LandingScreen
