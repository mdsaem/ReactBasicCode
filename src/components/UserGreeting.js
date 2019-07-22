import React, {Component} from 'react'

export class UserGreeting extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 isLogdIn: true
		}
	}
	render() {
		return this.state.isLogdIn? (
			<div>Welcome Guest</div>
			) :
			(
			<div>Welcome Biswash</div>
			)

		/*let message
		if (this.state.isLogdIn) {
			message=<div>Welcome Biswash</div>
		}else{
			message=<div>Hello Biswash</div>
		}
		return <div>{message}</div>*/


		/*if (this.state.isLogdIn) {
			return(
				<div>Welcome Guest</div>

			)

		}else {
			return(
			 <div>Hello Mr Js</div>
			)
		}

		return (
			<div>
			<div> Hello Mr Js </div>
			<h1>Welecome Guest</h1>
			</div>
		)*/
	}
}

export default UserGreeting