import React from 'react'
import Person from './Person'

function Indexandkey() {
     const names=['saem','raju','rajon']
     const nameList=names.map( (name,index) => <h2 key = {index}>{index} {name} </h2> )

     return (
          <div>
              {nameList} 
          </div>
     )
}

export default Indexandkey