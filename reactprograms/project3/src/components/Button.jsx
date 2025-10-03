import React from 'react'
import './Button.css'
const Button = (props) => {
    let myButtonStyles={backgroundColor:props.bgcolor,color:'red'}
    let a='fsd'
  return (
    <>
        {/* <button onClick={props.handleClick} style={{backgroundColor:props.bgcolor,color:'white'}}>{props.text}</button> */}
        {/* <button onClick={props.handleClick} style={myButtonStyles}>{props.text}</button> */}
        {/* <button onClick={props.handleClick} className='fsd'>{props.text}</button> */}
        <button onClick={props.handleClick} className={a}>{props.text}</button>
    </>
  )
}

export default Button