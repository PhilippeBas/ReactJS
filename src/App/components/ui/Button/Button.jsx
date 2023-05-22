import React from 'react'
// import './Button.css'
import style from './Button.module.css'
import PropTypes from 'prop-types'

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
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    style: PropTypes.object
}


export default Button;