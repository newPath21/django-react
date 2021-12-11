import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from '../actions/userActions'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()
  
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className='sticky-top'>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Корзина
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item>Личные данные</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>Выйти</NavDropdown.Item>
                  </NavDropdown>
              ): (
                <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Логин
                </Nav.Link>
              </LinkContainer>
              )}

                  {userInfo && userInfo.isAdmin && (
                      <NavDropdown title='Admin' id='adminmenu'>
                      <LinkContainer to='/admin/userlist'>
                        <NavDropdown.Item>Пользователи</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/productList'>
                        <NavDropdown.Item>Товары</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/orderlist'>
                        <NavDropdown.Item>Заказы</NavDropdown.Item>
                      </LinkContainer>
                  </NavDropdown>
                  )}
                    

              
            </Nav>
          </Navbar.Collapse>
          <SearchBox />
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
