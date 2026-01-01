import React from 'react'
import { useState } from 'react'
const Currency = () => {

    const [from , setfrom] = useState("")
    const [to , setto] = useState("")
  return (
    <>
    <div className='bg-amber-50 h-screen p-5'>
        <div className='w-3xl bg-white rounded shadow border p-3 mx-auto'></div>
        <select name="from" value={from} onChange={(e) => setfrom(e.target.value)}>
            <option value="">-Select Country-</option>
        </select>
        <select name="to" value={to} onChange={(e) => setto(e.target.value)}>
            <option value="">-Select Country-</option>
        </select>
    </div>
    </>
  )
}

export default Currency