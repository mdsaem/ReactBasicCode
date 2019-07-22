import React, {Component} from 'react'

export class Class extends Component {
	classHandeler(){
		console.log('Click Button')
	}
	render() {
		return (
			<div>
				<button onClick={this.classHandeler}>Click Me</button>
			</div>
		)
	}
}

export default Class