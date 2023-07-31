import React, { Component } from 'react'

class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }
  addUser = (e) => {
    this.props.history.push(`/register`);
  }
  login = (e) => {
    this.props.history.push(`/login`);
  }
  home = (e) => {
    this.props.history.push(`/home`);
  }
  about = (e) => {
    this.props.history.push(`/`);
  }

  render() {


    return (
      <div className='text-center'>
        
        <img src="asset/img/homeBanner.png" alt="home" className="img-fluid mb-3" />

          <div className="container pt-3 text-center">
            <div className="jumbotron">
              <h1 className="display-4" style={{fontWeight: "400"}}>
              Know-<b style={{color: "#F6CF32"}}>Your</b>-Neighbor
              </h1>
              <p className="lead">Find Your Way with Ease: Your Personal Navigator!</p>
              <hr className="my-4" />
                <p className="lead">
                  <a className="btn btn-primary btn-lg my-4" href="/about" role="button">More About Us</a>
                </p>
            </div>
          </div>

      </div>
    )
  }
}
export default HomeComponent