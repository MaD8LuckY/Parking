import { useState } from "react";
import { useSelector } from "react-redux";

import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";

import styleForm from './FormCreateUser.module.css';
import createUser from "../../entities/users/api/createUser";

import { errorTypes } from '../../shared/constants/errorTypes'

const FormCreateProfile = () => {
  const [err, setErr] = useState('no')
  const [secondName, setSecondName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [letter, setLetter] = useState('')

  const token = useSelector((store) => store.admin.token)
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

  const crUser = async (e) => { // api
    e.preventDefault()

    if (firstName !== '' && secondName !== '' && letter !== '' && carNumber !== '') {
      if (letter.includes(".") === true && letter.includes("@") === true) {
        setErr('no')

        let res = await createUser(firstName, secondName, letter, token);

        if (res.login) {
          let resCar = await createUser(letter, carNumber, token);
          setErr('sucUserCreated')
        }
        else if (res === 400) {
          setErr('errUserCreated')
        }
      }
      else {
        setErr('errLogin')
      }
    }
    else {
      setErr('errNoData')
    }
  }

  return (
    <form onSubmit={crUser} className={styleForm.form}>
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