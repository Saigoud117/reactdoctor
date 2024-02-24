import React,{useEffect,useState} from 'react'
import axios from 'axios'
import DeletePatient from './DeletePatient'
import EditPatient from './EditPatient'

export default function Home() {
  const [patients,setPatients]=useState([])
  useEffect(()=>{
    axios.get("https://doc-back.onrender.com/patients")
    .then((res)=>{
      console.log(res)
      setPatients(res.data)
    })
  },[])
  return (
    <div className='patient-parent'>
     {
      patients.map((patient)=>(
        <div className='patient' key={patient.id}>
          <p>Name:{patient.name}</p>
          <p>Age:{patient.age}</p>
          <p>Gender:{patient.gender}</p>
          <p>Disease:{patient.disease}</p>
          <p>Referred Doctor:{patient.doctor}</p>
          <div className='Patient-buttons'>
          <EditPatient id={patient.id}/>
          <DeletePatient id={patient.id}/>

          </div>
          
          
        </div>
      ))
     }
    </div>
  )
}