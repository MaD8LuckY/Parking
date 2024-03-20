import styleButton from './CSS/Button.module.css'

const Button = ({text, onClick }) => {

    return(
      <button className={text === "Отмена" ? styleButton.cancel : styleButton.button}
      onClick={onClick}>
        {text}
      </button>
    )
}

export default Button;