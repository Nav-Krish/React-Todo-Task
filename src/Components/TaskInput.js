import React from 'react'

function TaskInput({placeholder,value,onchange}) {
  return (
    
        <input className='inputbox me-3'placeholder={placeholder} value={value} onChange={onchange}/>
   
  )
}

export default TaskInput