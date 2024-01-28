import Input from "../UI/Input";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import styleForm from './FormStart.module.css';
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../service/server";
import { useState } from "react";

const FormStart = () => {

  const [err, setErr] = useState('no')
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
        if (res.auth === 1) {
          setErr('no')
          navigate('main', { replace: 'true' })
        }
        else if (res.auth === 0) {
          setErr('errData')
        }
      }
      ).catch(res => setErr('errSys'));
    };

    authorization()
  }

  return (
    <form onSubmit={entrance} className={styleForm.form}>
      {err === 'errSys' ?
        <p style={{ color: '#f00', marginBottom: '5px' }}>Ошибка системы</p>
        :
        err === 'no' ?
          <></>
          :
          <p style={{ color: '#f00', marginBottom: '5px' }}>Введены неверные данные</p>
      }
      <Input name="Логин" type="text" id='login' />
      <Input name="Пароль" type="password" id='password' />
      <Button text="Войти" />
    </form>
  )
}

export default FormStart;