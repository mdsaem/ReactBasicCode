import React from 'react'

const Hello=() =>{
	/*return(

		<div>

		 <h1>Mr Js How Are You </h1>

		</div>

		)*/
		return React.createElement('div',{id: 'hello',className: 'dumyClass'},
			React.createElement('h1',null,'How Are You Mr Js'))
}

export default Hello