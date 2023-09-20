
import './Header.css';
import logo from '../assets/logo.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Instag from '../assets/Instag.png'

function Header() {
  return (
    <div className="Header">
        <div id="Head">
            <img src={logo} alt="logo" width="250" height="50"/>
            <h3 class="animate__animated animate__zoomInDown">fun time daycare center</h3>
            <div className="animat">It's a funny time</div>
        </div>
        <div id="Head2">
          <h4 class="animate__animated animate__zoomInDown">CALL US TODAY</h4>
          <h2>(226) 663-5868</h2>
          <img id="Face" src={Facebook} alt="logo" width="40" height="40"/>
          <img id="Twit" src={Twitter} alt="logo" width="37" height="37"/>
          <img id="Insta" src={Instag} alt="logo" width="45" height="45"/>
        </div>
    </div>
  );
}


export default Header;

//=====================================================================================
