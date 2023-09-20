
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
        <a class="active" href='#' alt='Home'>HOME</a>
        <a href='#about' alt='About Us'>ABOUT</a>
        <a href='#facility' alt='Our Facility'>FACILITY</a>
        <a href='#groups' alt='Age Groups'>AGE GROUPS</a>
        <a href='#contact' alt='Contact Us'>CONTACT</a>
    </div>
  );
}

export default Nav;
