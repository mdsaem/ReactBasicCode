import React, {Component} from 'react'

export class LifecycleB extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: "saem"
		}
		console.log('LifecycleB Constructor')
	}
	static getDerivedStateFromProps(props,state){
		console.log('LifecycleB getDrivedStateFromProps')
		return null
	}
	componentDidMount(){
		console.log('LifecycleB Componetdidmount')
	}
	getSnapshotBeforeUpdate(){
		console.log('LifecycleB getSnapshotBeforeUpdate')
		return null
	}
	componentDidUpdate(){
		console.log('lifecycleB componentDidUpdate')
	}
	render() {
		console.log('LifecycleB Render')
		return (
			<div>
				B lifecycle
			</div>
		)
	}
}

export default LifecycleB