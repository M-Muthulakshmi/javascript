import libraicon from './libra-icon.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="nav-link" href="#"><img src={libraicon} width={70} height={70} /> </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto lt">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Rules  Regulations</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Price Card</a>
          </li>
        </ul>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <button type="submit" className="btn btn-warning btn-lg logbutton-head"><Link to="/Login">Login</Link></button>
          </form>
        </div>
      </div>
    </nav>
  </div>);
}

export default Header;