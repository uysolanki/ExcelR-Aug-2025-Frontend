import React from 'react'

const Navbar1 = () => {
    let menus=["File1","Edit1","Selection1","View1","Go","Run","Terminal","Help"]
  return (
    <div>
        <ul>
            {menus.map(
                (menu)=>(<li>{menu}</li>)
            )}
        </ul>
    </div>
  )
}

export default Navbar1