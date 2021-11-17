import "./portfolio.scss"
import { ArrowDownward } from "@material-ui/icons";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <h2>These are some of the projects that I have been involved with:</h2>

      <ul>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="ka1.png" alt=""/>
          <h3>Test name</h3>
        </div>
      </div>

      <a href="#portfolio">
        <ArrowDownward className="icon"/>
      </a>
    </div>
    
  )
}
