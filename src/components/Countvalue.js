import React, { Component}  from 'react'

 class Countvalue extends Component {
 	constructor(props) {
 		super(props)
 	
 		this.state = {
 			 count:0
 		}
 	}
 	increment(){
 		this.setState({
 			count:this.state.count + 1
 		},() =>{
 			console.log('Calback Vale Is:',this.state.count)
 		})
 		console.log(this.state.count)
 	}
	render() {
		return (
			<div>
				<div>count Value:{this.state.count}</div>
				<button onClick={ () => this.increment()}>increment</button>
			</div>
		)
	}
}

export default Countvalue