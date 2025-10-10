import React from 'react'

const Button = ({handleOnClick,text}) => {
  return (
    <>
        <button onClick={handleOnClick}>{text}</button>
    </>
  )
}

export default Button