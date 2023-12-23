import Input from "../UI/Input";
import Button from "../UI/Button";
import { AdminService } from "../../service/Admin.service";
import { setAuthrorization } from "../../features/auth/authSlice";
import styleForm from './FormStart.module.css';
import { useNavigate } from "react-router-dom";

const FormStart = () => {

  const navigate = useNavigate()

  const entrance = (e) => {
    e.preventDefault()
    const fetchData = async () => {
      const responceAdmin = await AdminService.getAll()

      if(responceAdmin === 1){
        navigate('main', {replace: 'true'})
      } else if (responceAdmin === 0) {
        alert('Неверно введены данные')
      }
      
    }

    fetchData()
   }

  return (
    <form onSubmit={entrance} className={styleForm.form}>
      <Input name="Логин" type="text" />
      <Input name="Пароль" type="password" />
      <Button text="Войти"/>
    </form>
  )
}

export default FormStart;