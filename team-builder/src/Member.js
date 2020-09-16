import React from 'react'

export default function Member({details}){
    
    return (
        <div className="container">
            <h2>{details.username}</h2>
            <p>Email:{details.email}</p>
            <p>Role:{details.role}</p>
        </div>
    )
}