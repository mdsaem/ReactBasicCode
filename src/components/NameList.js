import React from 'react'
import Person from './Person'

function NameList() {
     
     const persons=[
     {
          id:1,
          name:'saem',
          age:25,
          skill:'React'
     },
     {
     	id:2,
     	name:'raju',
     	age:27,
     	skill:'vue.js'
     },
     {
     	id:3,
     	name:'rajon',
     	age:26,
     	skill:'node.js'
     }

     ]
    const personsList=persons.map(person => <Person key = {person.name}  person = {person} />)
    return <div>{personsList}</div>
    
}

export default NameList