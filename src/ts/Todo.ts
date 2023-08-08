import { deleteAppDB, deleteTodo, loadTodos, saveTodos } from '../db/localDB';
import { Todo } from "./types";
import { setID } from "./utils";

export default class TodoApp {
	private todos: Todo[] = [];

	constructor() {}

	loadTodos() {
		this.todos = loadTodos();
		return this.todos;
	}

	addTodo(titleValue: string) {
		const newTodo: Todo = {
			id: setID(),
			title: titleValue,
			planned: true,
			inProgress: false,
			completed: false,
		};
		this.todos.push(newTodo);

		this.saveTodos();

		return newTodo;
	}

	saveTodos() {
		saveTodos(this.todos);
	}

	deleteTodo(todoId: number) {
		deleteTodo(todoId);
	}

	deleteAllTodos() {
		deleteAppDB();
		this.todos = [];
	}
}