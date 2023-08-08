import TodoApp from "./Todo";
import { Todo, TodoStatus } from "./types";

export class App extends TodoApp {
	private todoListContainer: HTMLUListElement | null;
	private todoForm: HTMLFormElement | null;
	private todoFormInput: HTMLInputElement | null;
	private deleteAllButton: HTMLButtonElement | null;

	constructor() {
		super();

		this.todoListContainer = document.querySelector("#todo-list-container");
		this.todoForm = document.querySelector("#todo-form");
		this.todoFormInput = document.querySelector("#todo-input");
		this.deleteAllButton = document.querySelector("#delete-all-todos");
	}

	initialize() {
		const todos = this.loadTodos();
		
		todos.forEach((todo) => {
			this.addTodoItem(todo);
		});

		this.todoForm?.addEventListener("submit", (e) => {
			e.preventDefault();

			if (this.todoFormInput?.value.trim() == "" || this.todoFormInput?.value.trim() == null) return;

			const newTodo = this.addTodo(this.todoFormInput.value);
			this.addTodoItem(newTodo);
			this.todoFormInput.value = "";
		});

		this.deleteAllButton?.addEventListener("click", () => {
			this.deleteAllTodos();
			this.removeAllTodos();
		});
	}

	addTodoItem(todo: Todo) {
		const item = document.createElement('li');
		item.className = "todo-item";
		const checkBoxWrapper = document.createElement("div");
		checkBoxWrapper.className = "checkBoxWrapper";
		const todoTitle = document.createElement("div");
		todoTitle.textContent = todo.title;
		todoTitle.className = "todoTitle";
		
		const plannedLabel = document.createElement('label');
		plannedLabel.textContent = TodoStatus.PLANNED;
		const plannedCheckbox = document.createElement('input');
		plannedCheckbox.type = 'checkbox';
		plannedCheckbox.checked = todo.planned;
		plannedLabel.append(plannedCheckbox);

		const inProgressLabel = document.createElement('label');
		inProgressLabel.textContent = TodoStatus.IN_PROGRESS;
		const inProgressCheckbox = document.createElement('input');
		inProgressCheckbox.type = 'checkbox';
		inProgressCheckbox.checked = todo.inProgress;
		inProgressLabel.append(inProgressCheckbox);

		const completedLabel = document.createElement('label');
		completedLabel.textContent = TodoStatus.COMPLETED;
		const completedCheckbox = document.createElement('input');
		completedCheckbox.type = 'checkbox';
		completedCheckbox.checked = todo.completed;
		completedLabel.append(completedCheckbox);
		
		checkBoxWrapper.append(plannedLabel, inProgressLabel, completedLabel);

		this.addCheckboxListeners(plannedCheckbox, inProgressCheckbox, completedCheckbox, todo);

		const deleteButton = document.createElement('button');
		deleteButton.textContent = "Delete";

		deleteButton.addEventListener("click", () => {
			this.removeTodo(todo.id, item);
		});

		item.append(checkBoxWrapper, todoTitle, deleteButton);

		this.todoListContainer?.append(item);
	}

	addCheckboxListeners(plannedCheckbox: HTMLInputElement, inProgressCheckbox: HTMLInputElement, completedCheckbox: HTMLInputElement, todo: Todo) {
		plannedCheckbox.addEventListener("change", () => {
			todo.planned = plannedCheckbox.checked;
			if (todo.planned) {
					todo.inProgress = false;
					inProgressCheckbox.checked = false;
					todo.completed = false;
					completedCheckbox.checked = false;
			}
			this.saveTodos();
		});
	
		inProgressCheckbox.addEventListener("change", () => {
				todo.inProgress = inProgressCheckbox.checked;
				if (todo.inProgress) {
						todo.planned = false;
						plannedCheckbox.checked = false;
						todo.completed = false;
						completedCheckbox.checked = false;
				}
				this.saveTodos();
		});
	
		completedCheckbox.addEventListener("change", () => {
				todo.completed = completedCheckbox.checked;
				if (todo.completed) {
						todo.planned = false;
						plannedCheckbox.checked = false;
						todo.inProgress = false;
						inProgressCheckbox.checked = false;
				}
				this.saveTodos();
		});
	}

	removeTodo(todoId: number, todoItem: HTMLLIElement) {
		this.deleteTodo(todoId);
		todoItem.remove();
	}

	removeAllTodos() {
		while (this.todoListContainer?.firstChild) {
			this.todoListContainer.removeChild(this.todoListContainer.firstChild);
		}
	}
}

