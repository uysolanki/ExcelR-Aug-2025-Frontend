import React from 'react'
import './Button.css'
const Button1   = ({text,handleClick,bgcolor}) => {
    //let myButtonStyles={backgroundColor:bgcolor,color:'red'}
    let myButtonStyles={backgroundColor:bgcolor?'white':'black',color:'red'}
    //let a='fsd'
  return (
    <>
        {/* <button onClick={props.handleClick} style={{backgroundColor:props.bgcolor,color:'white'}}>{props.text}</button> */}
        {/* <button onClick={props.handleClick} style={myButtonStyles}>{props.text}</button> */}
        {/* <button onClick={props.handleClick} className='fsd'>{props.text}</button> */}
        {/* <button onClick={handleClick} style={{backgroundColor:bgcolor?'white':'black',color:'red'}}>{text}</button> */}
        <button onClick={handleClick} style={myButtonStyles}>{text}</button>
    </>
  )
}

export default Button1