import React from 'react'

const SearchBar = ({handlesearchProductsByTitle}) => {
  return (
    <>
        <input type="text" onChange={handlesearchProductsByTitle}/>
    </>
  )
}

export default SearchBar