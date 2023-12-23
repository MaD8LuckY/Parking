import styleButton from './Button.module.css'

const Button = (props) => { // нужны размеры

  const onSubmit = () => {}

    return(
      <button className={styleButton.button}>{props.text}</button>
    )
}

export default Button;