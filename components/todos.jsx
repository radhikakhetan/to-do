import React from 'react';
import {connect} from 'react-redux';

import NewTodo from './newTodo';
import {addTodo} from '../actions/index';
import {deleteTodo} from '../actions/index';

const Todos = ({todos, dispatch}) => ( //doubt where dispatch is coming from   
	<div>
		<h1> Todos </h1>
		<NewTodo onChange={e => {
			if(e.keyCode === 13) {
				dispatch(addTodo(e.target.value))
				e.target.value = ''
			}
		}} /> 
		{todos.map((todo,index) => <p key={index}>{todo} <button onClick={e => {
			dispatch(deleteTodo(index))
		}}> XXXX </button>  </p> )} 
	</div>
////what is index above ??
	);

function mapStateToPros(todos) {
	return{
		todos
	};
}

export default connect(mapStateToPros)(Todos)
//what is server side what is client side