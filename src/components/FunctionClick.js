import React from 'react'

function FunctionClick() {

	function clickHandeler(){
		console.log("button Click")
	}
	return (
		<div>
		<button onClick={clickHandeler}>Click</button>
		</div>
	)
}

export default FunctionClick