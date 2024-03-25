import styleNavigation from './CSS/Navigation.module.css'
import { navData } from '../constants/nav-data';
import { NavLink } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? styleNavigation.liActive : styleNavigation.li;

const Navigation = () => {
  return (
    <nav className={styleNavigation.nav}>
      {
        navData.map((nav) => {
          return <NavLink to={nav.path} className={setActive} key={nav.name}>{nav.name}</NavLink>
        })
      }
    </nav>
  )
}

export default Navigation;