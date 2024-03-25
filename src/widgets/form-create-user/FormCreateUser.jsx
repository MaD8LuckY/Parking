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
  const [carNumbers, setCarNumbers] = useState([''])

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
        if (Number(e.target.id.split(' ')[1]) === carNumbers.length) {
          setCarNumbers([...carNumbers.filter((item) => item !== ''), e.target.value, '']);
        }
        else {
          const newValue = carNumbers.map((item, i) => {
            if(i === Number(e.target.id.split(' ')[1]-1)){
              return e.target.value
            }
            else {
              return item
            }
          })
          setCarNumbers([...newValue.filter((item) => item !== ''), '']);
        }
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
      <h2>Номера автомобилей</h2>
      {
        carNumbers.map((item, count) => {
          count++
          if (item.length === 0) {
            return <Input id={`car_number ${count}`} key={count} number='+' value={item} name='Номер автомобиля' onChange={onChangeInput} />
          }
          else {
            return <Input id={`car_number ${count}`} key={count} number={count} value={item} name='Номер автомобиля' onChange={onChangeInput} />
          }
        })
      }
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