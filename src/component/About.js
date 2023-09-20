
import Daycare1 from '../assets/daycare1.jpg';
import Daycare2 from '../assets/daycare2.jpg';

const About = () => {
    const h1Style = {margin: '15px 40px',color: '#ee3d81',fontSize: '2rem',
        textShadow: '4px 4px 4px #000',fontFamily: 'cursive'};
    const pStyle = {paddingTop: '30px', padding: '0 40px'};
    const Image1 = {position: 'relative',width: '700px',height: 'auto',top: '10px',
        left: '10px', margin: '100px 10px'};
    const Image2 = {position: 'relative',width: '700px',height: 'auto',top: '10px',
        left: '10px', margin: '100px 10px'};

    return (
        <section id="about">
            <h1 style={h1Style}>About Us</h1>
            <p style={pStyle}> Andres Arias - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                laborum cupiditate possimus labore, hic temporibus velit dicta earum
                suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                voluptatem.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                laborum cupiditate possimus labore, hic temporibus velit dicta earum
                suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                voluptatem.`
            </p>
            <img src={Daycare1} alt="Image" title='Hola' style={Image1}/>
            <img src={Daycare2} alt="Image" width="250" height="50" style={Image2}/>
        </section>
    )
};


export default About;
