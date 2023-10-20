import React, { useEffect, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
};

const tableCellStyle = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
};

const buttonStyle = {
  textDecoration: 'none',
  backgroundColor: '#0074D9',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '5px',
};
const VehicleList = () => {
  
          const [ridedetails,setRidedetails]=useState([]) 
          const navigate=useNavigate();
          
      useEffect(()=>{

      
          fetch('http://localhost:4000/allrides',{
        method:"get",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
        
      } )
      .then(res=>res.json())
      .then(data=>
        {
            if(data?.error){
        alert('Error')
        }else{
          if (data.result && Array.isArray(data.result)) {
            setRidedetails(data.result);
        } else {
            alert('Error or empty data');
        }
          
        }            
    
        })
      },[])
// ride details finding
const bookride = (rideId) => {
  fetch(`http://localhost:4000/ride/${rideId}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("jwt")
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.error) {
        alert('Error');
      } else {
        navigate('/Bookride', { state: { result: data } });
        console.log(data);
        
      }
    });
};


  return (
    <div className="vehicle-list">
      <h2>
        Currently available Rides
      </h2>
     <table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={tableHeaderStyle}>Vehicle Type</th>
      <th style={tableHeaderStyle}>Owner Name</th>
      <th style={tableHeaderStyle}>Gender</th>
      <th style={tableHeaderStyle}>Fare</th>
      <th style={tableHeaderStyle}>From</th>
      <th style={tableHeaderStyle}>To</th>
      <th style={tableHeaderStyle}>Book ride</th>
    </tr>
  </thead>
  <tbody>
    {
    ridedetails.map((ride, index) => (
      <tr key={ridedetails.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
        <td style={tableCellStyle}>{ride.vehicle}</td>
        <td style={tableCellStyle}>{ride.owner}</td>
        <td style={tableCellStyle}>{ride.gender}</td>
        <td style={tableCellStyle}>{ride.fare}</td>
        <td style={tableCellStyle}>{ride.from}</td>
        <td style={tableCellStyle}>{ride.to}</td>
        <td style={tableCellStyle}>
          {/* <a href="/bookRide" style={buttonStyle}>Book</a> */}
          <button style={buttonStyle} onClick={() => bookride(ride._id)}>Book</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  );
};

export default VehicleList;
