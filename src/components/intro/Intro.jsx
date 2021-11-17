import "./intro.scss"
import { ArrowDownward } from "@material-ui/icons";
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["software developer", "team player", "keen learner", "hard worker"]
    })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpeg" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there!</h2>
          <h3>My name is </h3>
          <h1>Daniel Clements</h1>
          <h3>and I'm a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <ArrowDownward className="icon"/>
        </a>
      </div>
    </div>
  )
}
