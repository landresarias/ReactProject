
import React, { useState } from 'react';
import DropInPlay from '../assets/DropInPlay.jpg';

const Home = () => {
    const homeSection = {display: 'flex', width: '100%', height: '670px', 
                        backgroundImage: `url(${DropInPlay})`, alignSelf: 'center',
                        backgroundPosition: 'center'};
    const h1Style = {margin: '15px 40px', color: '#fff', fontSize: '2rem',
                    textShadow: '4px 4px 4px #000', fontFamily: 'cursive'};
    const pStyle = {position: 'absolute', margin: '150px 0px', padding: '0 20px 5px',
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    background: 'rgb(255, 255, 255,.5)' , color: '#ee3d81',
                    fontSize: '2.7rem', text: 'left', borderRadius: '15px'};
    return (
        <section id="Home" >
            <div style={homeSection}>
                <h1 style={h1Style}>Home Page</h1>
                <p style={pStyle} class="animate__animated animate__zoomInDown">Evening & Weekend Care Available!</p>
            </div>
            <div >
                <Box></Box>
                <h1 style={h1Style}></h1> 
            </div>
        </section>
    )
};


const Box = () => {
    const [bgColour, setBgColour] = useState("#21aeca");
    const h1Style = {textAlign: 'center',margin: '100px auto'};
    const Acord = {maxWidth: '800px',margin: '100px auto'};
    const Title = {height: '40px',display: 'flex',flexDirection: 'row',justifyContent: 'space-between',
        cursor: 'pointer',backgroundColor: `${bgColour}`,padding: '5px 15px'};
    const Cont = {backgroundColor: '#9eacaf',padding: '5px 15px'};
    const accordionData = {
      title: 'Section No. 1',
      content: `Luis Arias - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    };
    const { title, content } = accordionData;
    const [isActive, setIsActive] = useState(false);
    return (
      <React.Fragment>
          <h1 style={h1Style}>Hide Paragraph</h1>
          <div className="accordion" style={Acord}>
              <div className="accordion-item">
                  <div className="accordion-title"
                  onClick={() => setIsActive(!isActive)} style={Title} onMouseEnter={() => setBgColour("#21aeee")}
                  onMouseLeave={() => setBgColour("#21aeca")}>
                      <div>{title}</div>
                      <div>{isActive ? '-' : '+'}</div>
                  </div>
                  {isActive && <div className="accordion-content" style={Cont}>{content}</div>}
              </div>
          </div>
      </React.Fragment>
    );
  };

export default Home;

