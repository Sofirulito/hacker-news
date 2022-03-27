import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">All</Link>
      <Link to="/myfaves">My faves</Link>
    </nav>
  )
}

export default Navigation;