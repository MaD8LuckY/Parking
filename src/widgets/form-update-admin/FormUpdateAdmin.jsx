import { useState } from "react";

import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";

import createAdmin from '../../features/create-admin/createAdmin'

import styleForm from './FormUpdateAdmin.module.css';
import { errorTypes } from '../../shared/constants/errorTypes';

const FormUpdateAdmin = () => {

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

  const entrance = async (e) => { // api
    e.preventDefault()

    let res = await createAdmin();

    console.log(res);

    // if (res.data[4].message === "The changes were saved successfully") {
    //   setErr('sucCreated')
    // }
    // else if (res.data[4].message === "Passwords don't match") {
    //   setErr('errDoublePass')
    // }
    // else if (res.data[4].message === "Invalid old password") {
    //   setErr('errOldPass')
    // }
  }

  return (
    <form onSubmit={entrance} className={styleForm.form}>
      <h2>Введите данные</h2>
      <Input id='login' onChange={onChangeInput} type='text' value={login} name="Логин" />
      <Input id='old_password' onChange={onChangeInput} type='password' value={oldPassword} name="Старый пароль" />
      <Input id='new_password' onChange={onChangeInput} type='password' value={newPassword} name="Введите новый пароль" />
      <Input id='double_new_password' onChange={onChangeInput} type='password' value={doubleNewPassword} name="Повторите пароль" />
      {err === 'no' ?
        <></>
        :
        <p className={styleForm.err}>{errorTypes[err]}</p>
      }
      <Button text="Сохранить" />
    </form>
  )
}

export default FormUpdateAdmin;