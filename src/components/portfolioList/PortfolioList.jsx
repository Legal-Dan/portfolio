import './portfolioList.scss'

export default function PortfolioList({id, title, alt, active, setSelected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} 
    onClick={() => setSelected(id)}>
        {title}{alt}
    </li>
  )
}
