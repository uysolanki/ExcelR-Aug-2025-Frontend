import React from 'react'
import { useState } from 'react'
import './RichTextBox.css'
import Button from './Button'

const RichTextBox = () => {
  let [data,setData]=useState('')
  let [previewData,setPreviewData]=useState('')

  console.log(Boolean(''))
  function handleOnChange(event)
  {
    setData(event.target.value)
    setPreviewData(event.target.value)
  }
  function convertToUpperCase()
  {
    setPreviewData(previewData.toUpperCase())
  }

  function convertToLowerCase()
  {
    setPreviewData(previewData.toLowerCase())
  }

  function reset()
  {
    setData('')
    setPreviewData('')
  }
  return (
    <>
      <div className='parent-container'>
        <div>
        <textarea rows='12' cols='30' value={data} onChange={handleOnChange} placeholder="Enter your text here..."></textarea>
          <div>
            {/* <button onClick={convertToUpperCase}>Upper Case</button> */}
            <Button handleOnClick={convertToUpperCase} text='Upper Case'/>
            {/* <button onClick={convertToLowerCase}>Lower Case</button>
            <button onClick={reset}>Reset</button> */}
            <Button handleOnClick={convertToLowerCase} text='Lower Case'/>
            <Button handleOnClick={reset} text='RESET'/>
            <p>Char Count : {previewData.length}</p>
            <p>Word Count :{previewData ? previewData.trim().split(/\s+/).length : 0}</p>
            <p>Reading Time : {previewData ? parseInt(previewData.trim().split(' ').length)/100 + " Minutes" : "0 Minutes"}</p>
          </div>
        </div>

        <div>
        <h3>Preview</h3>
        <p>{previewData ? previewData: 'Nothing to preview' }</p>
        </div>
      </div>
    </>

    
  )
}

export default RichTextBox