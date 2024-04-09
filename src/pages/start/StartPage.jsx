import logo from '../../shared/images/logoYellow.svg';
import FormAuth from '../../widgets/form-auth/FormAuth'
import styleStart from './Start.module.css'



const StartPage = () => {  
  return(
    <div className={styleStart.start}>
      <img className={styleStart.logo} src={logo} alt=""></img>
      <h1 className={styleStart.title}>Добро пожаловать</h1>
      <FormAuth className={styleStart.form}/>
    </div>
  )
}

export default StartPage;