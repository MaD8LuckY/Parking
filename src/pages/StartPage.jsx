import logo from '../images/logo2.svg';
import FormStart from '../containers/Forms/FormStart';
import styleStart from './Start.module.css'

const Start = () => {
  return(
    <div className={styleStart.start}>
      <img className={styleStart.logo} src={logo} alt=""></img>
      <h1 className={styleStart.title}>Добро пожаловать</h1>
      <FormStart className={styleStart.form}/>
    </div>
  )
}

export default Start;