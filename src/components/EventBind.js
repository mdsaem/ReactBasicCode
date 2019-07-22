import React, { Component}  from 'react'

export class EventBind extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 message:'hello'
		}
	}
	ClickHendeler(){
		this.setState({
			message:'Good Bye'
		})
		this.ClickHendeler=this.ClickHendeler.bind(this)
	}

	render() {
		return (
			<div>
			<div>{this.state.message}</div>
		   {/*  <button onClick={this.ClickHendeler.bind(this)}>Click</button> */ }
		     /* <button onClick={() => this.ClickHendeler()}>Click</button>*/
		      <button onClick={() => this.ClickHendeler()}>Click</button>

		</div>
		)
	}
}

export default EventBind