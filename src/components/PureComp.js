import React, {PureComponent} from 'react'

export class PureComp extends Component {
	render() {
		return (
			<div>
				 Pure Component = {this.props.name}
			</div>
		)
	}
}

export default PureComp