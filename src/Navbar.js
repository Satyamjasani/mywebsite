import { Button, Container, Row, Col, Carousel, } from 'react-bootstrap';
import { AiOutlineArrowRight } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () =>{
    return(
        <>
        <div className='navbar' >
             <Container>
        <nav >
          <Row className='main_menu'  >
            <Col className='logo' >
              <img src={require('./image/1.webp')} />
            </Col>
            <Col md={1} className='menu'>
              <ul className='flex uppercase font-bold'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Match'>Match</Link></li>
                <li><Link to='/Pages'>Pages</Link></li>
                <li><Link to='/Blog'>BLOG</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
              </ul>
            </Col>

            <Col className='btn'>
              <a href='#'>
                <img src={require('./image/btn.webp')} />
                <span>SIGN UP</span>
              </a>
            </Col>

          </Row>
        </nav>
      </Container>
      </div>
        </>
  
    )
}
export default Navbar;