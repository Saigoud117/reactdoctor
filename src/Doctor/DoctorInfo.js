import React,{useEffect,useState} from 'react'
import axios from 'axios'

export default function DoctorInfo() {
  const[doctors,setDoctors]=useState([])
  useEffect(()=>{
    axios.get("https://doc-back.onrender.com/doctors")
    .then((res)=>{
      console.log(res)
      setDoctors(res.data)
    })
  })
  return (
    <div>
      {
        doctors.map((doctor)=>(
          <div>
            <p>Name:{doctor.name}</p>
            <p>salary:{doctor.salary}</p>
            <p>gender:{doctor.gender}</p>
            <p>age:{doctor.age}</p>
            <p>Specilization:{doctor.specilization}</p>

          </div>
        ))
      
      
      }
      
    </div>
  )
}
