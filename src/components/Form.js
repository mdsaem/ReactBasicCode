import React, {Component} from 'react'

export class Form extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 username:'',
			 comments: '',
			 topic: ''
		}
	}
	handelUsernameChange= event =>{
		this.setState({
			username: event.target.value
		})
	}

  handelCommentChange= event =>{
  	this.setState({
  		comments:event.target.value
  	})
  }
  handelTopicChange= event =>{
  		this.setState({
  		topic:event.target.value
  	})
  }
  handleSubmit=event =>{
  alert('Message:#{this.state.username}');
  event.preventDefault()
  }

	render() {
		const {username,topic,comments} = this.state
		return (
			<form onSubmit={this.handleSubmit}>
			<div>
				<label>Username</label>
				<input type='text' value={username} onChange={this.handelUsernameChange}/>
			</div>

			<div>
				<label>Textarea</label>
				<textarea value={comments} onChange={this.handelCommentChange}/>
			</div>

			<div>
				<label>Option</label>
				<select value={topic} onChange={this.handelTopicChange} >
                 <option>Select</option>
				 <option value="laravel">Laravel</option>
				 <option value="react">React</option>
				 <option value="vue">VueJs</option>

				</select>
			</div>
			<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form