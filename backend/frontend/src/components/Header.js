import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { logout } from "../actions/userActions"
import SearchBox from "./SearchBox"
function Header() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image
                src='/static/images/logo.svg'
                alt='ProShop'
                fluid
                responsive
                width='80'
                height='80'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/login'>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user mr-1'></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
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
            </Nav>
            <SearchBox />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
