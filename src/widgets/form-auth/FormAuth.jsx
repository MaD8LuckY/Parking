import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import styleForm from './FormAuth.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import authorization from '../../features/auth/auth'
import { errorTypes } from '../../shared/constants/errorTypes';

const FormAuth = () => {

  const [err, setErr] = useState('no')
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onChangeInput = (e) => {
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

  // const onChangeErr = () => {
  //   setErr
  // }

  const auth = async (e) => {
    e.preventDefault();

    let res = await authorization();

    if (res.auth === 1) {
      setErr('no')
      navigate('main/map', { replace: 'true' })
    }
    else if (res.auth === 0) {
      setErr('errAuth')
    }
  }

  return (
    <form onSubmit={auth} className={styleForm.form}>
      <Input id='login' onChange={onChangeInput} type='text' value={login} name="Логин" />
      <Input id='password' onChange={onChangeInput} type='password' value={password} name="Пароль" />
      {err === 'no' ?
        <></>
        :
        <p className={styleForm.err}>{errorTypes[err]}</p>
      }
      <Button text="Войти" />
    </form>
  )
}

export default FormAuth;