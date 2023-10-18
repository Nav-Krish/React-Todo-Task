import React from 'react'

function CardComponent({data={},deleteTask,editTask,saveEdit,isEditing,index,status,setStatus}) {
  
  const statusChange=(ele)=>{
    setStatus(ele.target.value);
  }
  return (
   
<div className="card">
 
    <p>Name : {data.name}</p>
    <p>Description : {data.description}</p>
    <p>Status <span>
      <select className='text-center' value={status} onChange={statusChange} style={{background:status.toLowerCase()==='completed'?'rgb(19,173,137)':'rgb(247,141,138)' ,color:'white' ,outline:'none',width: '132px',
            height: '30px',
            border: 'none'}}>
        <option value="NotCompleted" >Not Completed</option>
        <option value='Completed' >Completed</option>
        </select></span></p>
    <div className='button'>
      {isEditing?(
        <>
        <button className='save' onClick={()=>saveEdit(index)}>Save</button>
        <button className='cancel' onClick={()=>editTask(null)}>Cancel</button>
        </>
      ):(
        <>
    <button className='edit'onClick={()=>editTask(index)}>Edit </button>
    <button className='delete'onClick={()=>deleteTask(index)}>Delete</button>
    </>
  )}
    </div>
 
</div>
  )
}

export default CardComponent