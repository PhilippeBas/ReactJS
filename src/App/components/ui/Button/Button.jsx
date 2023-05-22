import React from 'react'

const Button = (props) => {

    console.log(props);
    return <button className='Button'>{props.children}</button>
    // return <button>Benjamin</button> ;
}

export default Button;