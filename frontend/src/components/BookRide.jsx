import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookRide = (props) => {
 
  const location = useLocation();
  const data = location.state?.result;
  const { vehicle, owner, gender, fare } = data.result;
  console.log(data.result);
  const navigate=useNavigate();
  const booked=()=>{
    navigate('/Home')
    alert("RIDE Booked")
  }
  return (
    <div className="book-ride" style={{ background: "#99CCFF", height: '739px', paddingTop: '50px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: 'bold', color: 'white', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', fontSize: '45px', margin: '0', paddingBottom: '20px' }}>
        Become a RideShareHub passenger and save on travel costs by booking at minimum prices.
      </h1>
      <h2 style={{ background: "#99CCFF", paddingTop: '30px', margin: '0', fontSize: '36px' }}>
        Book a Ride
      </h2>
      <div className="ride-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
        <div className="detail" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
          <h3 style={{ margin: '0', fontSize: '24px' }}>Vehicle Type:</h3>
          <p style={{ margin: '0', fontSize: '20px' }}>{vehicle}</p>
        </div>
        <div className="detail" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
          <h3 style={{ margin: '0', fontSize: '24px' }}>Owner Name:</h3>
          <p style={{ margin: '0', fontSize: '20px' }}>{owner}</p>
        </div>
        <div className="detail" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
          <h3 style={{ margin: '0', fontSize: '24px' }}>Gender:</h3>
          <p style={{ margin: '0', fontSize: '20px' }}>{gender}</p>
        </div>
        <div className="detail" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
          <h3 style={{ margin: '0', fontSize: '24px' }}>Fare:</h3>
          <p style={{ margin: '0', fontSize: '20px' }}>{fare}</p>
        </div>
      </div>
      <button type="submit" className="offer-button" onClick={booked} style={{ background: 'white', borderRadius: '20px', padding: '10px 20px', marginTop: '30px', fontSize: '24px', cursor: 'pointer' }}>
        Book This Ride
      </button>
    </div>
  );
  
};

export default BookRide;
