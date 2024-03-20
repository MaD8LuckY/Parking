import Input from "../UI/Input";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import styleForm from './FormStart.module.css';
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../service/server";
import { useState } from "react";
import axios from "axios";

const FormStart = () => {

  const [err, setErr] = useState('no')
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  // const log = useSelector((state) => state.auth.login)
  // const pass = useSelector((state) => state.auth.password)

  const onChangeInput = (e) =>{
    switch (e.target.id) {
      case 'login':
        setLogin(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      default:
        return 0
    }
  }

  const entrance = (e) => { // api
    e.preventDefault()

    const authorization = async () => {
    //   if (log === '' || pass === '') {
    //     setErr('noData')
    //   }
    //   else {
    //   await apiPost('/api/token/', {
    //     "login": log,
    //     "password": pass,
    //     "first_name": "admin",
    //     "second_name": "admin"
    //   }
    //   ).then(res => {
    //     // if (res.auth === 1) {
    //     //   setErr('no')
    //     navigate('main', { replace: 'true' })
    //     // }
    //     // else if (res.auth === 0) {
    //     //   setErr('errData')
    //     // }
    //   }
    //   ).catch(res => setErr('errSys'));
    // }

    const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');
      console.log(res.data[0]);
      if (res.data[0].auth === 1) {
        setErr('no')
        navigate('main', { replace: 'true' })
      }
      else if (res.data[0].auth === 0) {
        setErr('errData')
      }

  };

  authorization()
}

return (
  <form onSubmit={entrance} className={styleForm.form}>
    <Input id='login' onChange={onChangeInput} type='text' value={login} name="Логин"/>
    <Input id='password' onChange={onChangeInput} type='password' value={password} name="Пароль"/>
    {err === 'errSys' ?
      <p className={styleForm.err}>Ошибка системы</p>
      :
      err === 'no' ?
        <></>
        :
        err === 'noData' ?
          <p className={styleForm.err}>Введите данные</p>
          :
          <p className={styleForm.err}>Введены неверные данные</p>
    }
    <Button text="Войти" />
  </form>
)
}

export default FormStart;