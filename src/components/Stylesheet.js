import React from 'react'
import  './myStylesheet.css'

function Stylesheet(props) {
	let className= props.primary ? 'primary': ''
	return (
		<div>
			<h1 className={'${className} font-xl'}>Hello Bishwash</h1>
		</div>
	)
}

export default Stylesheet