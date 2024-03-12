import logo from '../../images/logoYellow.svg';
import FormStart from '../Forms/FormStart';
import styleStart from './Start.module.css'

const Start = () => {
  localStorage.clear();
  
  return(
    <div className={styleStart.start}>
      <img className={styleStart.logo} src={logo} alt=""></img>
      <h1 className={styleStart.title}>Добро пожаловать</h1>
      <FormStart className={styleStart.form}/>
    </div>
  )
}

export default Start;