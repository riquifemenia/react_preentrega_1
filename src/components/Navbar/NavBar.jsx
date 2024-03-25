import { CartWidget } from '../CartWidget/CartWidget'
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'
import './NavBar.scss'

export const NavBar = () => {
  return (
    <>
      <Navbar bg='body-tertiary' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Tienda Lorem®</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='menu'>
              <NavLink to=''>Lorem artículos</NavLink>
            </Nav>
            <Nav className='cart-widget'>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
