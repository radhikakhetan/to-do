import immutable from 'immutable';

export default (state = immutable.List(['Code More']) , action) => {
	switch (action.type) {
		case "addTodo" : //doubt - how do all the previous todos also remain in the state here ?? is the state passed along ??
			return state.unshift(action.todo) ; //change push to unshift and vice versa for different orders
		case 'deleteTodo' : 
			return state.filter( (todo, index) => index !== action.index ) ; //does it get all the todo list ??
		default: 
			return state;
	}
}
