import React from 'react';
import VehicleList from './vehicleList';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';

const buttonStyle = {
  textDecoration: 'none',
  backgroundColor: '#0074D9',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '5px',
};
function Home() {
  return <div style={{background:"#99CCFF",height:'auto'}}>
    <NavBar/>
      <div style={{
    textAlign: 'center',
    height: '700px',
    backgroundImage: 'url("https://jugnoo.io/wp-content/uploads/2021/06/Jugnoo-Carpool-Softwar-Owning-the-Drive-to-Owing-the-Ride.png")',  // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '700px',
    width: 'auto',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
   }}>
    <h1 style={{ marginTop: "0px",}}>Riding Together, Sharing the Journey</h1>
   </div>
    <div className="home container" style={{marginLeft:"100px"}}>
      <header>
        
      
      </header>

      <main>
        <section>
         
                <VehicleList/>
         
        </section>

        <section style={{ alignItems:'center',background:"#FFFFFF",marginTop:'100px'}}>
          <h2 style={{textAlign:'center'}}>Offer a Ride </h2>
          <p style={{marginLeft:'50px',fontSize:'25px',textAlign:'center'}}>Offer a ride to share with others and earn extra.</p>
          <Link to ='/OfferRide' style={{ ...buttonStyle, marginLeft:'600px' }}>Offer Ride</Link>
        </section>
      </main>
      
    </div>
    </div>;
}

export default Home;
