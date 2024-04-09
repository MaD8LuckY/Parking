import { useState } from "react";

import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";

import styleForm from './FormCreateUser.module.css';
import createUser from "../../features/create-admin/createAdmin";

import {errorTypes} from '../../shared/constants/errorTypes'

const FormCreateProfile = () => {

  const [err, setErr] = useState('no')
  const [secondName, setSecondName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [letter, setLetter] = useState('')
  const [carNumber, setCarNumber] = useState('')

  const onChangeInput = (e) => {
    switch (e.target.id.split(' ')[0]) {
      case 'second_name':
        setSecondName(e.target.value)
        setErr('no')
        break
      case 'first_name':
        setFirstName(e.target.value)
        setErr('no')
        break
      case 'letter':
        setLetter(e.target.value)
        setErr('no')
        break
      case 'car_number':
        setCarNumber(e.target.value)
        setErr('no')
        break
      default:
        return 0
    }
  }

  const entrance = async (e) => { // api
    e.preventDefault()

    let res = await createUser();

    if (res.data[3].message === "Account creation was completed successfully") {
      setErr('sucCreated')
    }
    else if (res.data[3].message === "The user already exists") {
      setErr('errCreated')
    }
  }

  return (
    <form onSubmit={entrance} className={styleForm.form}>
      <h2>Введите данные пользователя</h2>
      <Input id='second_name' onChange={onChangeInput} type='text' value={secondName} name="Фамилия" />
      <Input id='first_name' onChange={onChangeInput} type='text' value={firstName} name="Имя" />
      <Input id='car_number' onChange={onChangeInput} type='text' value={carNumber} name="Номер автомобиля" />
      <Input id='letter' onChange={onChangeInput} type='email' value={letter} name="Почта" />
      {err === 'no' ?
        <></>
        :
        <p className={err === 'sucUserCreated' ? styleForm.suc : styleForm.err}>{errorTypes[err]}</p>
      }
      <Button text="Создать" />
    </form>
  )
}

export default FormCreateProfile;