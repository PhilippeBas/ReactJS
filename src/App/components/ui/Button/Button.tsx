import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'

interface I_ButtonProps{
    onButtonClick: Function
    style?: object
    bgColor?: string
    children: string|React.ReactNode|Array<React.ReactNode|string>
    type?: 'button'|'reset'|'submit'
}

const Button:React.FC<I_ButtonProps> = (props) => {
        return <button onClick={(evt)=>{
        props.onButtonClick('Hello phil');
    }} className={style.Button}
       style={{ ...props.style,backgroundColor:props.bgColor} }
    >{props.children}</button>
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['button','reset','submit'])
}
Button.defaultProps={
    bgColor: 'lime'

}


export default Button;