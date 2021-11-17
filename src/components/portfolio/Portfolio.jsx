import "./portfolio.scss"
import { ArrowDownward } from "@material-ui/icons";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <h2>These are some of the projects that I have been involved with:</h2>

      <ul>
        <li className="active">Featured</li>
        <li>Featured</li>
        <li>Featured</li>
      </ul>
      <div className="container">
        <div className="imgContainer">
          <img src="assets/ka1.png" alt=""></img>
          <h3>KickAbout</h3>
        </div>
        <div className="imgContainer">
          <img src="assets/ka1.png" alt=""></img>
          <h3>KickAbout</h3>
        </div>
        <div className="imgContainer">
          <img src="assets/ka1.png" alt=""></img>
          <h3>KickAbout</h3>
        </div>
        <div className="imgContainer">
          <img src="assets/ka1.png" alt=""></img>
          <h3>KickAbout</h3>
        </div>
        
        </div>

      <a href="#contact">
        <ArrowDownward className="icon"/>
      </a>
    </div>
    
  )
}
