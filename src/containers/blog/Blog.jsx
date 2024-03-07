
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text"> Jumpstart your career in Software QA <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2024" text="Top 10 Software Testing YouTube Channels To Follow In 2024" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 11, 2024" text="What’s the significance of blogging in the software industry today?" />
        <Article imgUrl={blog03} date="Mar 15, 2023" text="Knowledge sharing and thought leadership" />
        <Article imgUrl={blog04} date="Oct 04, 2023" text="Simplifying Performance Testing with HyperExecute" />
        <Article imgUrl={blog05} date="Sep 28, 2021" text="Prioritizing Precision: Innovative Approaches to QA Test Case Selection" />
      </div>
    </div>
  </div>
);

export default Blog;