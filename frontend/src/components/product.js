import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import '../app.css'
function Product({ product }) {
  return (
    <Card className="my-3 p-5 rounded">
        <Link to={ `/product/${product._id}` }>
            <Card.Img src={product.image} className='product-image'/>
            </Link> 
            <Card.Body>
            {/* <Link to={ `/product/${product._id}` }> */}
                <Card.Title as="div">
                  <strong className='text-center product-text'>{product.name}</strong>
                </Card.Title>
            {/* </Link> */}
            </Card.Body>
            <Card.Text as="div">
              <div className="my-3">
                {/* {product.rating} from {product.numReviews} reviews */}
                <Rating value={product.rating} text= {`${product.numReviews} reviews`} color = { 'Yellow' } />
              </div>
            </Card.Text>
            <Card.Text>
              <h5 className='text-center'>INR {product.price}</h5>
            </Card.Text>
            <Button variant="outline-success" className='my-3 p-3'>Buy</Button>
    </Card>
  )
}

export default Product
