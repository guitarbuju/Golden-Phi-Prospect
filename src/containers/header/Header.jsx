
import people from '../../assets/people.png';
import iaphi from '../../assets/iaphi.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Unlock the Secrets to Seamless Software Testing</h1>
      <p>Master Quality Assurance with Our Comprehensive Online Course. Gain Real Work Experience in QA Software with Our Practical Course: Learn Git, Github, Jira, Scrum, Jest, Cypress, Selenium, and More Agile Methods Hands-On!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={iaphi} alt="head"/>
    </div>
  </div>
);

export default Header;