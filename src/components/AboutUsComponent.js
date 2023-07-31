import React, { Component } from 'react';

class AboutUsComponent extends Component {
  render() {
    return (
      <div>

        <div class="jumbotron jumbotron-fluid my-5 ">
          <div class="container text-center">
            <h1 class="display-5 font-weight-bold">About Us</h1>
            <hr class="divider pt-2 rounded" />
          </div>
        </div>

        <div class="container pt-3 text-center" style={{maxWidth: "100vh"}}>
          <div class="row ">
            <div class="col-2 ">
              <img src="asset/img/a1.jpg" width="130" height="150"
                class="rounded shadow" />
            </div>
            <div class="col-4">
              <img src="asset/img/a5.jpg" width="260" height="150"
                class="shadow" />
            </div>
            <div class="col-4">
              <img src="asset/img/a14.jpg" width="260" height="150"
                class="shadow" />
            </div>
            <div class="col-2">
              <img src="asset/img/a10.jpg" width="130" height="150"
                class="rounded shadow" />
            </div>
          </div>
          
        </div>

        <div class="jumbotron-fluid  my-5 text-justify">
          <h1 class="display-4 text-center" style={{fontWeight: "400"}}>
            About Know-<b style={{color: "#F6CF32"}}>Your</b>-Neighbor
              
          </h1>
          <p class="lead text-center">Find Your Way with Ease: Your Personal Navigator!</p>
          <hr class="my-4" />
          <p class="px-5 mx-5">Know-Your-Neighbor is your ultimate web app for seamlessly connecting with your local community. Whether you're looking for nearby services, events, or just want to explore the hidden gems in your area, Know-Your-Neighbor is here to be your friendly neighborhood guide. With a user-friendly interface and a vast array of local information, we aim to make discovering and engaging with your community a delightful experience.</p>

          <div class="container">
            <div class="row p-3">
              <div class="col-6"><b style={{color:"#003366"}}>Mission</b><br/>
                <p class="text-justify">Our mission at Know-Your-Neighbor is to bridge the gap between neighbors, local businesses, and community events by providing a centralized platform for easy access to valuable information. We are dedicated to promoting a sense of belonging and unity within neighborhoods, encouraging residents to actively participate in local activities and support local businesses. Through Know-Your-Neighbor, we strive to strengthen community bonds and create a positive impact on the lives of everyone we touch. </p></div>
              <div class="col-6"><b style={{color:"#003366"}}>Vision</b><br/>
                <p class="text-justify">At Know-Your-Neighbor, we are driven by a deep commitment to our community-centric values. We embrace inclusivity, celebrating the uniqueness of each neighborhood and ensuring everyone feels welcome and represented. Our platform is designed to be accessible to all, providing user-friendly experiences for people of all ages and backgrounds. We prioritize trustworthiness, delivering accurate and reliable information to empower our users. </p></div>
            </div>

          </div>




        </div>


      </div>
    );
  }
}

export default AboutUsComponent;