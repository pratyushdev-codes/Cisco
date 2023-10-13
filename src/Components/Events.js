import React, { Component } from 'react';

export class Events extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <h5>Upcoming Events</h5>
        <br/>
        <div className="d-flex justify-content-center">
          <div className="card mx-3" style={{ width: '20rem' ,borderRadius:'15px', border: '1px solid grey', background:'black', color:'white'}}>
            <img
              src="https://cdn.dribbble.com/users/3573448/screenshots/14824348/coding_laptop.png"
              className="card-img-top"
              alt="..."
              style={{ height: '200px', objectFit: 'cover', borderRadius:'15px' }}
            />
            <div className="card-body">
              <h5 className="card-title">InnoTech Nexus</h5>
              <p className="card-text">
              An event focused on exploring the latest advancements in technology, including areas like AI, IoT, cybersecurity, and more.
              </p><br/><br/><br/>
              <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
            </div>
          </div>

          <div className="card mx-3" style={{ width: '20rem',borderRadius:'15px', border: '1px solid grey' , background:'black', color:'white'}}>
            <img
              src="https://thumbs.dreamstime.com/b/coding-code-geek-color-icon-animation-animated-sign-isolated-white-background-207646888.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: '200px', objectFit: 'cover', borderRadius:'15px' }}
            />
            <div className="card-body">
              <h5 className="card-title">CodeCrafters Challenge: Unleashing Digital Creativity</h5>
              <p className="card-text">
              A competition that encourages participants to showcase their coding skills and creativity in developing innovative digital solutions.
              </p><br/><br/><br/><br/>
              <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
            </div>
          </div>

          <div className="card mx-3" style={{ width: '20rem', borderRadius:'15px',border: '1px solid grey' , background:'black', color:'white'}}>
            <img
              src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/davis-coding-for-parents-2-01.jpg?w=2880&quality=85"
              className="card-img-top"
              alt="..."
              style={{ height: '200px', objectFit: 'cover', borderRadius:'15px' }}
            />
            <div className="card-body">
              <h5 className="card-title">TechIgnite: Igniting Innovation in Tech</h5>
              <p className="card-text">An event aimed at igniting innovation in the tech world, featuring workshops, talks, and challenges across various tech domains.solutions.</p><br/><br/>
              <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
            </div>
          </div>
         
          
        </div>
        <br/>
      </div>
    );
  }
}

export default Events;
