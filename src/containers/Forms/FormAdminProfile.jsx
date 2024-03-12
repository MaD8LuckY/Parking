import { useState } from "react";

import axios from "axios";

import Input from "../UI/Input";
import Button from "../UI/Button";

import styleForm from './FormAdminProfile.module.css';

const FormCreateProfile = () => {

  const [err, setErr] = useState('no')
  const [login, setLogin] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [doubleNewPassword, setDoubleNewPassword] = useState('')

  const onChangeInput = (e) => {
    switch (e.target.id) {
      case 'login':
        setLogin(e.target.value)
        setErr('no')
        break
      case 'old_password':
        setOldPassword(e.target.value)
        setErr('no')
        break
      case 'new_password':
        setNewPassword(e.target.value)
        setErr('no')
        break
      case 'double_new_password':
        setDoubleNewPassword(e.target.value)
        setErr('no')
        break
      default:
        return 0
    }
  }

  const entrance = (e) => { // api
    e.preventDefault()

    const authorization = async () => {
      // if (login === '' || oldPassword === '' || newPassword === '' || doubleNewPassword === '') {
      //   setErr('noData')
      // }
      // else {
      // await apiPost('/api/token/', {
      //   "login": log,
      //   "password": pass,
      //   "first_name": "admin",
      //   "second_name": "admin"
      // }
      // ).then(res => {
      //   // if (res.auth === 1) {
      //   //   setErr('no')
      //   navigate('main', { replace: 'true' })
      //   // }
      //   // else if (res.auth === 0) {
      //   //   setErr('errData')
      //   // }
      // }
      // ).catch(res => setErr('errSys'));
      const res = await axios.get('https://65a8c529219bfa3718678849.mockapi.io/auth');
      console.log(res.data[4]);
      if (res.data[4].message === "The changes were saved successfully") {
        setErr('sucCreated')
      }
      else if (res.data[4].message === "Passwords don't match") {
        setErr('errDoublePass')
      }
      else if (res.data[4].message === "Invalid old password") {
        setErr('errOldPass')
      }
      //} 
    };

    authorization()
  }

  return (
    <form onSubmit={entrance} className={styleForm.form}>
      <h2>Введите данные</h2>
      <Input id='login' onChange={onChangeInput} type='text' value={login} name="Логин" />
      <Input id='old_password' onChange={onChangeInput} type='password' value={oldPassword} name="Старый пароль" />
      <Input id='new_password' onChange={onChangeInput} type='password' value={newPassword} name="Введите новый пароль" />
      <Input id='double_new_password' onChange={onChangeInput} type='password' value={doubleNewPassword} name="Повторите пароль" />
      {err === 'noData' ?
        <p className={styleForm.err}>Введите данные</p>
        :
        err === 'errSys' ?
          <p className={styleForm.err}>Ошибка системы</p>
          :
          err === 'no' ?
            <></>
            :
            err === 'sucCreated' ?
              <p className={styleForm.suc}>Изменения сохранены</p>
              :
              err === 'errDoublePass' ?
                <p className={styleForm.err}>Пароли не совпадают</p>
                :
                <p className={styleForm.err}>Неверный старый пароль</p>

      }
      <Button text="Сохранить" />
    </form>
  )
}

export default FormCreateProfile;