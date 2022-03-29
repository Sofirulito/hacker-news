import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container">
      <nav className="nav">
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">All</NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/myfaves">My faves</NavLink>
      </nav>
    </div>
  )
}

export default Navigation;