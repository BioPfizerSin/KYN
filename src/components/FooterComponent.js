import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <div>

        <footer className="mt-auto footer">

          <div class=" p-3 text-light container-fluid mt-5" style={{ backgroundColor: "#003366" }} >
            © 2023 Copyright:
            <a href="http://localhost:3000/"> KYN</a>
          </div>

        </footer>

      </div>
    );
  }
}

export default FooterComponent;