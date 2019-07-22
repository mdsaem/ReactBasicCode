import React, {Component} from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: "saem"
		}
		console.log(" LifecycleA Constructor")
	}
	static getDerivedStateFromProps(props,state){
		console.log(' LifecycleA getDrivedStateFromProps ')
		return null
	}
	componentDidMount(){
		console.log('LifecycleA Componetdidmount')
	}
	shouldComponentUpdate(){
		console.log('LifecycleA shouldComponetUpdate')
		return true
	}
	getSnapshotBeforeUpdate(){
		console.log('LifecycleA getSnapshotBeforeUpdate')
		return null
	}
	componentDidUpdate(){
		console.log('lifecycleA componentDidUpdate')
	}
	changeState  = () =>{
		this.setState({
			name: 'codevaluation'
		})
	}
	render() {
		console.log('LifecycleA Render')
		return (
			<div>
				<div>A lifecycle</div>
				<button onClick = {this.changeState}>Change State</button>
				<LifecycleB />
			</div>
		)
	}
}

export default LifecycleA