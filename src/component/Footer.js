
import './Footer.css';

function Footer() {
    let date = new Date().getFullYear();
    return (
        <div className="Footer">
            <p> 
                &copy; {date} triOS College &trade;  
            </p>
        </div>
    );
}

export default Footer;
