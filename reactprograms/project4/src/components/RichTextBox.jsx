import React from 'react'
import { useState } from 'react'
import './RichTextBox.css'

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
  return (
    <>
      <div className='parent-container'>
        <div>
        <textarea rows='12' cols='30' value={data} onChange={handleOnChange}></textarea>
          <div>
            <button onClick={convertToUpperCase}>Upper Case</button>
            <button onClick={convertToLowerCase}>Lower Case</button>
            <p>Char Count : {previewData.length}</p>
            <p>Word Count : {previewData.trim().split(' ').length}</p>
            <p>Reading Time : {parseInt(previewData.trim().split(' ').length)/100 + " Minutes"}</p>
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