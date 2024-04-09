import styleInput from './CSS/Input.module.css';

const Input = ({ id, onChange, type, value, name }) => {
  //const [hasError, setHasError] = useState(false)


  return (
    <input
      id={id}
      className={styleInput.input}
      type={type}
      onChange={onChange}
      placeholder={name}
      value={value}
    // style={{ border: hasError ? '1px solid red' : null }}
    />

  )
}

export default Input;