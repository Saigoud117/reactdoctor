import React, {useState} from 'react'
import axios from 'axios'

export default function PatientsInfo() {
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [gender,setGender]=useState("")
  const [disease,setDisease]=useState("")
  const [doctor,setDoctor]=useState("")
  const [weight,setWeight]=useState("")
  function addpatient(){
    axios.post("https://doc-back.onrender.com/patients",{
      name,age,gender,disease,doctor,weight
    })
    .then((res)=>{
      console.log(res)
    })
    alert("submited");
  }
  return (
    <div className='patient-details'>
      <p>
        <input placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
      </p>
      <p>
        <input placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)}/>
      </p>
      <p>
        <input placeholder='Enter Gender' onChange={(e)=>setGender(e.target.value)}/>
      </p>
      <p>
        <input placeholder='Enter Disease' onChange={(e)=>setDisease(e.target.value)}/>
      </p>
      <p>
        <input placeholder='Enter Doctor' onChange={(e)=>setDoctor(e.target.value)}/>
      </p>
      <p>
        <input placeholder='Enter Weight' onChange={(e)=>setWeight(e.target.value)}/>
      </p>
      <button onClick={addpatient}>Add Patient</button>
    </div>
  )
}
