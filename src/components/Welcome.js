/*import React, { Component}  from 'react'
class Welcome extends Component{
	render(){
		return (
			<h1>Actor Name Is:{this.props.name}&& Action Movie Part is:{this.props.heroName} </h1>
			)
		
	}
}
export default Welcome*/

import React, { Component}  from 'react'
class Welcome extends Component{
	render(){
		const{name,heroName} = this.props
		return (
			<h1>Actor Name Is:{name}&& Action Movie Part is:{heroName} </h1>
			)
		
	}
}
export default Welcome