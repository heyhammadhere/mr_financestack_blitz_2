import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'





function Header() {
  // let user = JSON.parse(localStorage.getItem('user-info'))
  // const history = useHistory();
  // function logOut() {
  //   localStorage.clear()
  //   history.push("/register")
  // }



  return (
  <div className="mt-3 ms-5 me-5">
    <Navbar bg="primary" variant="dark" className="LogoNavSlogan" expand="lg">


      <Navbar.Brand href="#home"  >
        <div  className="ms-5">  
        <FontAwesomeIcon   className="flex-item-nav ms-2" icon={faCoins} />
               {` Mr Finance `}
              
         </div>
      
      

      </Navbar.Brand>


      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto flex-item-nav">
          <Nav.Link href="jewelry_orders">Jewelry orders</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    </div>

  )


}

export default Header