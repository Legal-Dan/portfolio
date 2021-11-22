import "./portfolio.scss"
import { ArrowDownward } from "@material-ui/icons";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import { featuredPortfolio, rubyPortfolio, reactPortfolio, jsPortfolio, otherPortfolio } from "../../data";

export default function Portfolio() {
  const [selected,setSelected] = useState("featured")
  const [data,setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "ruby",
      title: "Ruby",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "js",
      title: "JavaScript",
    },
    {
      id: "other",
      title: "Other",
    }
  ]

  useEffect(()=>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "ruby":
        setData(rubyPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
        case "js":
          setData(jsPortfolio);
          break;
        case "other":
        setData(otherPortfolio);
        break;
    default:
      setData(featuredPortfolio);
    }
  },[selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <h2>These are some of the projects that I have been involved with:</h2>

      <ul>
        {list.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (


        <div className="imgContainer">
          <img src={d.img} alt=""></img>
          <h3>{d.title}</h3>
        </div>
        ))}
        
        </div>

      <a href="#contact">
        <ArrowDownward className="icon"/>
      </a>
    </div>
    
  )
}
