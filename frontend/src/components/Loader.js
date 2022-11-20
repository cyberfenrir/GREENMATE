import React from 'react'
import { Spinner } from 'react-bootstrap'
import '../app.css'

function Loader() {
  return (
    <div className='d-flex justify-content-center'>
    <Spinner animation='border' role = 'status' className='load-spin' variant='success' >
        <span className='sr-only'>Loading...</span>

    </Spinner>
    </div>
  )
}

export default Loader
