import React, {Component} from 'react';

class SingleTodo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
        <li>{this.props.todo}<button className="deletebutton" onClick={this.props.delete}>-</button></li>

			);
	}
} 

export default SingleTodo;