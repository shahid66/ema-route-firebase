import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useState } from 'react';


firebase.initializeApp(firebaseConfig);





const Login = () => {
  const[user,setUser]=useState({
    name:'',
    email:'',
    photo:'',
    password:''
  });
  var provider = new firebase.auth.GoogleAuthProvider();
  
  const handelGLogin=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res =>{
      const{displayName,email, photoURL}=res.user;
      const signedInUser ={
        isSignedIn: true,
        name: displayName,
        email:email,
        photo:photoURL
      }
      setUser(signedInUser);
    })

    .catch((error)=> {
   
    });
    
  }
  const handelChange =(e)=>{
    let isValidField;
    if(e.target.name ==='email'){
       isValidField = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name ==='password'){
      const passLength = e.target.value >6;
      const passPatarn = /\d{1}/.test(e.target.value);
      isValidField =passLength && passPatarn;
    }
    if(isValidField){
      const newUserInfo ={...user};
      newUserInfo[e.target.name] =e.target.value;
      setUser(newUserInfo);
    }
  }
  const handelFLogin =()=>{

  }
  const handelEmailLogin =()=>{

  }
    return (
        <div className='fromstyle'>
            <h3>Login with Email</h3>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handelChange} type="email" name='email' placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handelChange} type="password" name='password' placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={handelEmailLogin} variant="primary" type="submit">
    Submit
  </Button>
</Form>
    <h3>Login with </h3>
        <div className='socialIcon'>
        <Button><FontAwesomeIcon onClick={handelFLogin} icon={faFacebook}/></Button>
    <Button><FontAwesomeIcon onClick={handelGLogin} icon={faGoogle}/></Button>
        </div>
    <h1>welcome {user.email}</h1>
        </div>
       
    );
};

export default Login;