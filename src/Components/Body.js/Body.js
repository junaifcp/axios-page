import React, { useEffect } from 'react'
import './Body.css'
import axios from 'axios'
import { useState } from 'react'


function Body() {
    const [state,setState]=useState([])
    const [form1,setForm1]=useState('')

   const [object,setObject]=useState([])
    const submitChange=(e)=>{
        e.preventDefault()
        setObject([...object,form1])
    }
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
           console.log(response.data)
           setState(response.data.name)
       }).catch(error=>{
           console.log(error)
       })
    }, [])
    
    return ( 
        <div className="main-body">
            <div className='body'><br /><br />
            <form action="post" >
                <b>Name:</b>&nbsp;<input value={form1} onChange={(e)=>setForm1(e.target.value)} type="text" id='name' className='sdname' />&nbsp;&nbsp;&nbsp;&nbsp;<br/><br />
                {/*<b>Qualification:</b><input value={form2} onChange={(e)=>setForm2(e.target.value)} type="text" id='s-age' className='age' /><br /><br />
                <b>Interested Course&nbsp;:&nbsp;</b>*/ } 
                <div className="btn-div">
                <button className='clear'>Clear</button>
                <button className='submit' onClick={submitChange}>Submit</button> 
                </div>
            </form>  

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
