import styleInput from './Input.module.css';

const Input = (props) => { // placeholder type
  const onSubmit = () => {}

    return(
      <input className={styleInput.input} type={props.type} placeholder={props.name}></input>
    )
}

export default Input;