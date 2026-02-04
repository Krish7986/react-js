import { useState } from 'react'


function Form() {
  const [name, setName] = useState("")
  const handel = (e)=>{
    e.preventDefault();
    alert(`hello ${name}`)
  }

  return (
    <>
    <form action="" onSubmit={handel}>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default Form
