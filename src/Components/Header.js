import React, { Component } from 'react'
export class Header extends Component {
  render() {
    return (
      <div>
         <style>
          {`
            .banner-image {
              max-width: 100%;
              border-radius: 20px;
            }

            .text-welcome{
              color:black;
              font-size: 30px;
              font-weight:bold;
            }
            .text-community{
              color:skyblue;
             
              
            }
          `}
        </style>
        <img src="./images/banner.png" className="banner-image" alt="Banner" />

        <br/>
        <br/>  
        <br/>
      
        <div div className='text-welcome'><h5>Welcome to the Community!<br/></h5></div>
      
        
        
        
        <div className='text-community'>The Community is a hub for connecting with your peers and Cisco specialists to ask for help, share your expertise, build your network, and grow professionally.</div>
        <br/>
        <br/>
       
       
      </div>
    )
  }
}

export default Header
