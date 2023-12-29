import styleButton from './Button.module.css'

const Button = (props) => {

    return(
      <button className={styleButton.button}>
        {props.text}
      </button>
    )
}

export default Button;