import logoSmall from '../images/logo1.svg';
import Menu from './UI/Menu';
import styleHeader from './Header.module.css';

const Header = () => { // нужны размеры
    return (
      <header className={styleHeader.header}>
        <img src={logoSmall} alt='' className={styleHeader.logo}/>
        <Menu/>
      </header>
    )
}

export default Header;