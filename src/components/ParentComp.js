import React, {Component,PureComponent} from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'


export class ParentComp extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: 'saem'
		}
	}
	componentDidMount(){
		setInterval( () => {
        this.setState({
        	name:'arif'
        })

		},2000)
	}
	render() {
		return (
			<div>
				Parent Componet
				<RegComp name={this.sate.name} />
				<PureComp name={this.sate.name} />
			</div>
		)
	}
}

export default ParentComp