
import possibilityImage from '../../assets/student.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="importance">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Why is Q.A in software <br /> Important!!</h1>
      <p>Modern software systems are becoming increasingly complex, incorporating various technologies, platforms, and integrations. QA engineers with expertise in testing diverse software components, including web applications, mobile apps, APIs, and microservices, are in high demand to ensure the reliability and performance of these systems.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;