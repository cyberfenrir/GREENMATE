import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'

import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


  return (  
      <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer  to = "/">
        <Navbar.Brand>
          <span  class="text-success">Green</span><span>Mate</span>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Home">Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Plants" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBox />

          <LinkContainer  to = "/learn">
          <Nav.Link >
          <Button variant="success me-5">Learn</Button>
          </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart me-5"></i></Nav.Link>
          </LinkContainer>

          {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>

  )
}

export default Header
