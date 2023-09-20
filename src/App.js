
import React, { useState } from "react";
import './App.css';
import Email from './assets/email.png';

let isOpen = false;

const App = () => {
  const [style, setStyle] = useState("contactForm");
  const changeStyle = () => {
    if(isOpen){
      setStyle("contactForm");
      isOpen = false;
    }
    else{
      setStyle("contactForm2");
      isOpen = true;
    }
  };
  return (
    <div className="App">
      <form id={style} action="contact.php" method="post">
        <img id="emailIcon" src={Email} alt="email icon" 
            onClick={changeStyle}/>
        <input type="text" name="name" id="name" placeholder="name"/>
        <input type="text" name="email" id="email" placeholder="email"/>
        <select name="subject" id="subject" title="subject">
            <option value="">Subject</option>
            <option value="General">General</option>
            <option value="Feedback">Feedback</option>
            <option value="Complaint">Complaint</option>
            <option value="Suggestion">Suggestion</option>
        </select>
        <textarea name="message" id="message" cols="30" rows="6" 
            placeholder="your message here..."></textarea>
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
}

export default App;
