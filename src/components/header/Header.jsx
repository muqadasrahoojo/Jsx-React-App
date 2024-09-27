import React from 'react'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <img src={Logo} alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">

              <li className="nav-item">
                <a className="nav-link active fw-bolder" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-black" href="#">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-black" href="#">Contact Us</a>
              </li>


            </ul>

            <button className="btn fw-semibold me-2" type="submit">Log in</button>
            <button style={{ backgroundColor: '#ef8d21' }} className="btn text-white fw-semibold py-2 rounded-5" type="submit">Book Scooter</button>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
