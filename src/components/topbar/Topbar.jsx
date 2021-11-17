import "./topbar.scss"
import {Mail,LinkedIn} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="name">
            <h1> Daniel Clements </h1>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon"/>
            <span><a href="https://www.linkedin.com/in/daniel-clements-10878ba8/">LinkedIn Profile</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span><a href="mailto:clemies2000@hotmail.com">clemies2000@hotmail.com</a></span>
          </div>
        </div>
        <div className="right">
          <a href="#intro">Intro</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}
