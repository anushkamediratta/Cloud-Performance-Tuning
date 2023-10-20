import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const buttonStyle = {
  textDecoration: 'none',
  backgroundColor: '#0074D9',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '5px',
};
const NavBar=()=> {
  return (
    <Navbar  style={{background:"#FFFFFF",height:'80px'}}>
      <Container style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Navbar.Brand href="#home"> 
        <img src="https://cdn.blablacar.com/kairos/assets/images/blablacar_social-2d6e3368079483133513.png" 
        alt="Logo"
        style={{ height: '35px', marginLeft: '10px' }} 
    />  <span style={{textDecoration:'',fontWeight:'bold',color:'#000033',fontFamily: 'Arial, sans-serif', fontSize: '24px',paddingLeft: '0px'}}>RideShareHub</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Link  style={{ ...buttonStyle, marginRight: '10px' }}>Search</Link>
         <Link to="/" style={buttonStyle}>Logout</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;