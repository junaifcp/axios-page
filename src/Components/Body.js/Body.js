import React from 'react'
import './Body.css'
import axios from 'axios'
import { useState } from 'react'
//import Select from 'react-select'

function Body() {
    const [form1,setForm1]=useState('')
    //const [form2,setForm2]=useState('')
   // const [quali,setQuali]=useState('')
   // const [course,setCourse]=useState('')
   const [object,setObject]=useState([])
    const submitChange=(e)=>{
        e.preventDefault()
        setObject([...object,form1])
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            axios.post('https://jsonplaceholder.typicode.com/users',object).then(response=>{
                console.log(response)
            }).catch(error=>{
                console.log(error)
            })

        })
    }
    
    return ( 
        <div className="main-body">
            <div className='body'><br /><br />
                <b>Name:</b>&nbsp;<input value={form1} onChange={(e)=>setForm1(e.target.value)} type="text" id='name' className='sdname' />&nbsp;&nbsp;&nbsp;&nbsp;<br/><br />
                {/*<b>Qualification:</b><input value={form2} onChange={(e)=>setForm2(e.target.value)} type="text" id='s-age' className='age' /><br /><br />
                <b>Interested Course&nbsp;:&nbsp;</b>*/ } 
                <div className="btn-div">
                <button className='clear'>Clear</button>
                <button className='submit' onClick={submitChange}>Submit</button>
                </div>

            </div>
            <div className="table">
            <table>
                <tr>
                  <th>Name of the student to add</th>
                </tr>

            {
                object.map((value)=>{

                    return(
                            <tr>
                                        <td>{value}</td>
                            </tr>       
                            
                        
                    )
                })
            }
            </table>
         </div>
        </div>
    )
}

export default Body
