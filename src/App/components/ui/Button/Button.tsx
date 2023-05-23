import React,{useState,useEffect} from 'react'
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
    const [isClicked, setisclicked] = useState(false);
    useEffect(() => {
        console.log('toto');
          if(isClicked){
                setTimeout(()=> setisclicked(false), 1000
            )};
        }, [isClicked])
    return <button onClick={(evt)=>{
        props.onButtonClick('Hello phil');
        setisclicked(true);  
    }} className={!isClicked?style.Button:style.Button+' '+style.clicked}
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