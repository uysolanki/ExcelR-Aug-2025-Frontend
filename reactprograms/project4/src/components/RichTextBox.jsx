import React from 'react'
import { useState } from 'react'

const RichTextBox = () => {
  let [data,setData]=useState('')
  let [previewData,setPreviewData]=useState('')
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
  return (
    <>
        <div>
        <textarea rows='12' cols='30' value={data} onChange={handleOnChange}></textarea>
        <button onClick={convertToUpperCase}>Upper Case</button>
        <button onClick={convertToLowerCase}>Lower Case</button>
        </div>

        <div>
        <h3>Preview</h3>
        <p>{previewData}</p>
        </div>
    </>

    
  )
}

export default RichTextBox