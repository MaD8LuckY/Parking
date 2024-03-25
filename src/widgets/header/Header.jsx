import logoSmall from '../../shared/images/logoEmpty.svg';
import Menu from '../../shared/ui/Menu';
import styleHeader from './Header.module.css';
import Navigation from '../../shared/ui/Navigation';

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