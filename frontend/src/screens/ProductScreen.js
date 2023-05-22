import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'



import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'


import { useSelector, useDispatch } from 'react-redux'
import '../app.css'
import { listProductDetails, createProductReview } from '../actions/productActions'


function ProductScreen(props) { 
  const [qty, setQty] = useState(1)
  const navigate = useNavigate();

  
  //adding for review
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");


  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

   //ading for review to be implemented later
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector(state => state.productReviewCreate)
  const {
    loading: listProductReview,
    error: errorPRoductReview,
    success: successProductReview,
  } = productReviewCreate




   let {id} = useParams()


  useEffect(()=>{
    dispatch(listProductDetails(id))
    
  },[dispatch, id] )

const addToCartHandler = () =>{
    // console.log('Add To Cart:', id)
    navigate(`/cart/${id}?qty=${qty}`)
}


    return (
      <div>
      <Link to='/Home' className='btn btn-light my-3'>Go Back</Link>
      {loading ?
        <Loader />
        : error ? <Message variant='danger'>{error} </Message>
          : <div>
            <Row>
              <Col md={4}>
                <img className="productscreen-img" src={`${product.image}`} alt={product.name} fluid />
              </Col>
              <Col md={5} className="productscreen-content">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} review`} color={'yellow'} />
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Price: INR {product.price}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Sold By: {product.seller_name}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>



                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>INR {product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col className='center-quantity'><p>Qty</p></Col>
                          <Col xs='auto' className='my-1'>
                            <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                              {
                                [...Array(product.countInStock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))
                              }
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}

                    <ListGroup.Item>
                      <Button
                        onClick={addToCartHandler}
                        className='btn-block button-fill'
                        disabled={product.countInStock === 0}
                        type='button'>

                        Add to Cart

                      </Button>
                    </ListGroup.Item>
                  </ListGroup>

                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <h4>Reviews</h4>
                {product.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                <ListGroup variant='flush'>
                  {product.reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} color='#f8e825' />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                {/* user review form to be added here  */}

              </Col>
            </Row>
          </div>
      }



    </div>
  )
}

export default ProductScreen
