import "./contact.scss"
import {Mail,LinkedIn,GitHub} from "@material-ui/icons"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>You can contact me at:</h1>
      <div className="itemContainer">
            <LinkedIn className="icon"/>
            <span><a href="https://www.linkedin.com/in/daniel-clements-10878ba8/">LinkedIn Profile</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span><a href="mailto:clemies2000@hotmail.com">clemies2000@hotmail.com</a></span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon"/>
            <span><a href="https://github.com/Legal-Dan">GitHub Profile</a></span>
          </div>
    </div>
  )
}
