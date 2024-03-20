import styleInput from './CSS/Input.module.css';

// import { useState } from 'react';

const Input = ({ number = '', id, onChange, type, value, name}) => {
  //const [hasError, setHasError] = useState(false)


  return (
    <>
      {
        number === '' ?
          <input
            id={id}
            className={styleInput.input}
            type={type}
            // onChange={e => {
            //   setState(e.target.value, props.id);
            //   setValue(e.target.value);
            //   setHasError(e.target.value.trim().length === 0)
            // }} 
            onChange={onChange}
            placeholder={name}
            value={value}
          // style={{ border: hasError ? '1px solid red' : null }}
          />
          :
          <div className={styleInput.div}>
            <p className={styleInput.p}>{number}</p>
            <input 
            id={id}
            className={styleInput.inputShort}
            value={value}
            placeholder={name}
            onChange={onChange}
            type="text" />
          </div>
      }
    </>

  )
}

export default Input;