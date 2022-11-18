import React from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen(props) {  
  let {id} = useParams()
  const product = products.find((p) => p._id == id)
  // console.log(product.image)
  
    return (
    <div>
      <Link to ='/Home' className = 'btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
            <img src = {`.${product.image}`} alt = {product.name} fluid />
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
