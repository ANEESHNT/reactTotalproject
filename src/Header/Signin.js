import React, { Component } from 'react'

export default class Signin extends Component {
  render() {
    return (
      <div style={{paddingTop:"60px"}}>
      <div className="row justify-content-center" >


<div class="col-md-10 col-lg-8 col-xl-5 mb-4" >

  <section class="form-elegant scrollbar-light-blue">

   
    <div class="card" style={{backgroundColor:"whitesmoke"}}>

      <div class="card-body mx-4">

        
        <div class="text-center">
          <h3 class="dark-grey-text mb-5"><strong>Sign up</strong></h3>
        </div>

       
        <div class="md-form">
        <label for="Form-name1">Your name</label>
          <input type="text" id="Form-name1" class="form-control"/>
          
        </div>

        <div class="md-form">
        <label for="Form-surname1">Password</label>
          <input type="text" id="Form-surname1" class="form-control"/>
          
        </div>

        <div class="md-form">
        <label for="Form-email1">Your email</label>
          <input type="text" id="Form-email1" class="form-control"/>
          
        </div>

        <div class="md-form pb-3">
        <label for="Form-pass1">Your password</label>
          <input type="password" id="Form-pass1" class="form-control"/>
         
          <p class="font-small d-flex justify-content-end">Forgot <a href="#" class="ml-1" style={{color:"blue",textDecoration:"none"}}>
              Password?</a></p>
        </div>

        <div class="text-center mb-3">
          <button type="button" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
        </div>
        <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
          with:</p>

        <div class="row my-3 d-flex justify-content-center">
          
          <button type="button" class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook "></i></button>
         
          <button type="button" class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></button>
   
          <button type="button" class="btn btn-social-icon btn-google"><i class="fa fa-google"></i></button>
        </div>

      </div>

    
      <div class="modal-footer mx-5 pt-3 mb-1">
        <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" class="blue-text ml-1" style={{color:"blue",textDecoration:"none"}}>
            Sign Up</a></p>
      </div>

    </div>

  </section>

</div>
      </div>
      </div>
    )
  }
}
