import React, { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

const submitHandler=(e)=>{
  e.preventDefault()
  const copyTask=[...task];
  copyTask.push({title,details})
  setTask(copyTask)
  setTitle('')
  setDetails('')
}
   
const deletNote=(idx)=>{
  const copyTask=[...task];
  copyTask.splice(idx, 1)
  setTask(copyTask)

}

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='flex flex-col gap-4 lg:w-1/2 items-start p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

            {/* //input heanding */}
         <input type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full py-2 border-2 outline-none rounded bg-black text-white'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
             
             {/* //imput details */}
        <textarea
        type="text" 
        placeholder='write details here...'
        className='px-5 py-2 w-full h-40 flex item-start flex-row border-2  outline-none rounded bg-black text-white'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button
        className='px-5 py-2 w-full outline-none bg-white text-black rounded'
        >Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto '>
          {task.map(function(elm,idx){
           return <div key={idx} className=' flex justify-between flex-col items-start min-h-52 h-auto  w-40 min-w-0 relative rounded-2xl py-6 px-4 text-black  bg-cover bg-[url(https://imgs.search.brave.com/KX_Nm1chXU7VOepMV4_5AF5ndCf97kMVnpyV3KEx7fU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3MC9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw)]'>
           <div>
             <h3 className='leading-tight text-xl font-bold'>{elm.title}</h3>
                <p className='text-gray-600 mt-2 leading-tight whitespace-pre-wrap wrap-break-word'>
                       {elm.details}
                    </p>          
 </div>
           <button onClick={() => deletNote(idx)} className='w-full bg-red-400 text-white text-xs rounded-xl py-1'> delete note</button>
           </div>

          })}
        </div>
      </div>
    </div>
  )
}

export default App
