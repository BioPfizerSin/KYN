import React, { Component } from 'react';

class ContactUsComponent extends Component {
  render() {
    return (

      <div>


        <div class="jumbotron jumbotron-fluid my-5 ">
          <div class="container text-center">
            <h1 class="display-5 font-weight-bold">Contact Us</h1>
            <hr class="divider pt-2 rounded" />
          </div>
        </div>


        <div class="container-fluid position-absolute" style={{backgroundColor: "#E9EBED", paddingBottom: "70vh"}}>
        </div>

        <div class="container pt-5" style={{maxWidth: "100vh"}}>
          <div class="row">

            <div class="col-sm-6 mb-5 ">
              <div class="card shadow rounded border-0">

                <div class="card-body">
                  <img src="asset/img/lc.png"
                    width="70" height="70" class="p-2 rounded-circle mb-2" />
                  <h4 class="card-title">Corporate Office Location</h4>
                  <hr class="divider rounded" />
                  <h6 class="card-text">KYN HQ</h6>
                  <p class="card-text">725 J, Jalan Sungai Dua, Desa Permai Indah, 11700 Gelugor, Pulau Pinang</p>
                  <a href="#" class="">+603-456-7777</a>
                </div>
              </div>
            </div>




            <div class="col-sm-6 mb-5">
              <div class="card shadow rounded border-0">
                <div class="card-body">
                  <img src="asset/img/wa.png"
                    width="70" height="70" class="p-2 rounded-circle mb-2" />
                  <h4 class="card-title">Chat with us directly</h4>
                  <hr class="divider rounded" />
                  <div class="row">
                    <div class="col-6">
                      <img src="asset/img/qr-code.png"
                        width="150" height="150" class="p-2" />


                    </div>
                    <div class="col-6 mt-5">
                      <h6 class="card-text">WhatApp ID</h6>
                      <a class="card-text" href="#">+603-456-7777</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 mb-5">
              <div class="card shadow rounded border-0">

                <div class="card-body">
                  <img src="asset/img/cs.png"
                    width="70" height="70" class="p-2 rounded-circle mb-2" />
                  <h4 class="card-title">General Inquiries / Feedback</h4>
                  <hr class="divider rounded" />
                  <p class="card-text">9.00am - 6pm (Mon-Fri)</p>
                  <a href="#" class="">enquiry@kyn.my</a>
                </div>
              </div>
            </div>


            <div class="col-sm-6 mb-5">
              <div class="card shadow rounded border-0">

                <div class="card-body">
                  <img src="asset/img/pr.png"
                    width="70" height="70" class="p-2 rounded-circle mb-2" />
                  <h4 class="card-title">Opportunities</h4>
                  <hr class="divider rounded" />
                  <h6 class="card-text">Dealer Partnerships</h6>
                  <a href="#" class="">businessDev@kyn.my</a>

                  <h6 class="card-text mt-4">Other Partnerships</h6>
                  <a href="#" class="">partner@kyn.my</a>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    );
  }
}

export default ContactUsComponent;