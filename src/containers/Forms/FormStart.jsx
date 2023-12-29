import Input from "../UI/Input";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import styleForm from './FormStart.module.css';
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../service/server";

const FormStart = () => {

  const navigate = useNavigate()
  const log = useSelector((state) => state.auth.login)
  const pass = useSelector((state) => state.auth.password)

  const entrance = (e) => { // api
    e.preventDefault()

    const authorization = async () => {
      await apiPost('/api/admin_auth/', {
        "login": log,
        "password": pass,
      }
      ).then(res => {
          if(res.auth === 1){
              navigate('main', {replace: 'true'})
            } 
          else if (res.auth === 0) {
              alert('Неверно введены данные')
          }
        }
      ).catch(err => console.log('createBooking err', err));
    };

    authorization()
   }

  return (
    <form onSubmit={entrance} className={styleForm.form}>
      <Input name="Логин" type="text" id='login'/>
      <Input name="Пароль" type="password" id='password'/>
      <Button text="Войти"/>
    </form>
  )
}

export default FormStart;