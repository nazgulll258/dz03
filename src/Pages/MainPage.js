import React from 'react'

export default function MainPage({info}) {
  return (
    <div>
       <li>{info.title}
      
        </li>
        <li>{info.description}</li>
    </div>
  )
}
