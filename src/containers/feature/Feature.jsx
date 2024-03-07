
import Feature from '../../components/feature/Feature';
import './feature.css';

const featuresData = [
  {
    title: "Practical Experience",
    text: "Gain hands-on experience with industry-standard tools and methodologies."
  },
  {
    title: "Real-World Application",
    text: "Learn how to apply agile methodologies and testing practices in professional environments."
  },
  {
    title: "Career Readiness",
    text: "Become a competitive candidate for QA positions with sought-after skills and knowledge."
  },
  {
    title: "Confidence Building",
    text: "Build confidence in your abilities through practical application and teamwork."
  }
]


const Features = () => (
  <div className="gpt3__features section__padding" id="value">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"></h1>
      <p>Request Early Access to Get Started to gain valuable</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;