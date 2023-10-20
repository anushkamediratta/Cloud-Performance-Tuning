import React, { useState } from 'react';

const OfferRide = () => {
  const [vehicle, setVehicle] = useState('');
  const [owner, setOwner] = useState('');
  const [gender, setGender] = useState('');
  const [fare, setFare] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  

  const onOfferSubmitHandler = (e) => {
    e.preventDefault();
      fetch('http://localhost:4000/OfferRide',{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
        body:JSON.stringify({
            vehicle,owner, gender,from,to,fare
        })
      } )
      .then(res=>res.json())
      .then(data=>
        {
          
        if(data?.error){
        alert('Not Booked')
        }else{
               
          console.log(data);
          setVehicle('')
          setOwner('')
          setGender('')
          setFare('')
          setFrom('')
          setTo('')
     
        }            
    
        })
    
    
  };

  return ( 
    
    <div className="offer-ride" style={{background:"#99CCFF",height:'739px',paddingTop:'50px'}}>
      <h1 style={{background:"",height:'auto',fontWeight:'bold',textAlign:"center",color:"white",fontFamily:"Arial, sans-serif",fontStyle:"italic",fontSize:'45px'}}>Become a RideShareHub Driver and save on travel costs by sharing your rides with passengers.</h1>
      <h1 style={{background:"#99CCFF",height:'auto',paddingTop:'50px',textAlign:'center'}}>Offer a Ride</h1>
      <form onSubmit={onOfferSubmitHandler}>
      <div className="form-group" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
  <label style={{ textAlign: 'center' }}>Vehicle Type:</label>
  <input
    type="text"
    value={vehicle}
    onChange={(e) => setVehicle(e.target.value)}
    style={{ textAlign: 'center' }}
  />
</div>
<div className="form-group" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
  <label style={{ textAlign: 'center' }}>Owner Name:</label>
  <input
    type="text"
    value={owner}
    onChange={(e) => setOwner(e.target.value)}
    style={{ textAlign: 'center' }}
  />
</div>
<div className="form-group" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
  <label style={{ textAlign: 'center' }}>Gender:</label>
  <input
    type="text"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    style={{ textAlign: 'center' }}
  />
</div>
<div className="form-group" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
  <label style={{ textAlign: 'center' }}>Fare:</label>
  <input
    type="text"
    value={fare}
    onChange={(e) => setFare(e.target.value)}
    style={{ textAlign: 'center' }}
  />
</div>
<div className="form-group" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
  <label style={{ textAlign: 'center' }}>From:</label>
  <input
    type="text"
    value={from}
    onChange={(e) => setFrom(e.target.value)}
    style={{ textAlign: 'center' }}
  />
</div>
<div className="form-group" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
  <label style={{ textAlign: 'center' }}>TO:</label>
  <input
    type="text"
    value={to}
    onChange={(e) => setTo(e.target.value)}
    style={{ textAlign: 'center' }}
  />
</div>


<button type="submit" className="offer-button" style={{ background: 'white', borderRadius: '20px', padding: '10px 20px', marginTop: '30px', fontSize: '24px', cursor: 'pointer',marginLeft:'670px' }}>
          Offer This Ride
        </button>
      </form>
    </div>
  );
};

export default OfferRide;
