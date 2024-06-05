import { NavLink } from 'react-router-dom'
import "./index.css"
import Logo from "../../assets/images.png"
NavLink
const Index = () => {
  return (
    <div className='sidebar'>
        <img src={Logo} alt="logo" />
        <NavLink to="/main/cars" className="navlink" >
           Cars
        </NavLink>
    </div>
  )
}

export default Index;