import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup=()=> {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const navigate=useNavigate();
    const onSignUpSubmitHandler=e=>{
        e.preventDefault()
        fetch('http://localhost:4000/Signup',{
          method:"post",
          headers:{
            "Content-Type":"application/json"
        },
          body:JSON.stringify({
              email,
              password,
              name
          })
        } )
        .then(res=>res.json())
        .then(data=>
          {
            
          if(data?.error){
          alert('Invalid Login Details')
          }else{
    
            navigate('/Login')
                 
          }            
      
          })
      }
      

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

    <Form onSubmit={onSignUpSubmitHandler}>


          <div className="divider d-flex align-items-center my-4">
            <h2 className="text-center fw-bold mx-3 mb-0">SignUp </h2>
          </div>
              
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  value={email} onChange={e=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={e=>setPassword(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' size="lg" value={name} onChange={e=>setName(e.target.value)}/>

          <div className="d-flex justify-content-between mb-4">
            
            <a >Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <Button>
                Signup
            </Button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/" className="link-danger">Login</a></p>
          </div>
          </Form>

        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default Signup;