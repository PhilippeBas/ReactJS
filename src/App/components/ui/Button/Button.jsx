import React from 'react'
// import './Button.css'
import style from './Button.module.css'

const Button = (props) => {

    console.log(props);
    return <button onClick={(evt)=>{
        props.onButtonClick('Hello phil');
    }} className={style.Button}
    //    style={ {backgroundColor:props.bgColor} }
       style={{ ...props.style,backgroundColor:props.bgColor} }
    >{props.children}</button>
    // return <button>Benjamin</button> ;
}

export default Button;