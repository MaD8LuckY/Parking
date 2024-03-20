import logoSmall from '../images/logoEmpty.svg';
import Menu from './UI/Menu';
import styleHeader from './Header.module.css';
import Navigation from './UI/Navigation';

const Header = () => {

  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.container}>
        <img src={logoSmall} alt='' className={styleHeader.logo} />
        <Navigation />
        <Menu />
      </div>
    </header>
  )
}

export default Header;