import { Todo } from "../ts/types";

const DB_NAME = "TODOS";

export function saveTodos(todos: Todo[])  {
	localStorage.setItem(DB_NAME, JSON.stringify(todos));
}

export function loadTodos(): Todo[] {
	const todosJSON = localStorage.getItem(DB_NAME);
	if(todosJSON == null) return [];

	return JSON.parse(todosJSON);
}

export function deleteTodo(todoId: number) {
	const todos = loadTodos();
	const updatedTodo = todos.filter((todo) => todo.id !== todoId);
	saveTodos(updatedTodo);
}

export function deleteAppDB() {
	localStorage.removeItem(DB_NAME);
}