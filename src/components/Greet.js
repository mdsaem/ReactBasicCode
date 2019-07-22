import React from 'react'

/*export const Greet = ({name,heroName}) => {

	return (
		<div>
		< h1 >Hi: {name} InterestingPart: {heroName} < /h1>
      
		</div>
		)
}*/
export const Greet = props => {
	const {name,heroName}=props
	return (
		<div>
		< h1 >Hi: {name} InterestingPart: {heroName} < /h1>
      
		</div>
		)
	}


