import React from 'react'
import './Button.css'

const Button = (props) => {

    console.log(props);
    return <button className={style.Button}>{props.children}</button>
    // return <button>Benjamin</button> ;
}

export default Button;