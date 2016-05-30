export function addTodo (todo) {
	return{
		type : "addTodo",
		todo : todo
	};
};

export function deleteTodo (index) {
	return {
		type : "deleteTodo",
		index : index
	};
};