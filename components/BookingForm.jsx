"use client"

import React, { useState } from 'react'

const BookingForm = () => {
    const [name, setName] = useState('')
    return (
        <form action="">
            <input type="text" placeholder='Enter full name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Address' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='People' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='How many days?' value={name} onChange={(e) => setName(e.target.value)} />
            <textarea type="text" rows={4} placeholder='Message' value={name} onChange={(e) => setName(e.target.value)} />

            <button className='btn'>Submit</button>
        </form>
    )
}

export default BookingForm