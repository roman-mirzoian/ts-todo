import TodoApp from "./Todo";
import { Todo } from "./types";
export declare class App extends TodoApp {
    private todoListContainer;
    private todoForm;
    private todoFormInput;
    private deleteAllButton;
    constructor();
    initialize(): void;
    addTodoItem(todo: Todo): void;
    addCheckboxListeners(plannedCheckbox: HTMLInputElement, inProgressCheckbox: HTMLInputElement, completedCheckbox: HTMLInputElement, todo: Todo): void;
    removeTodo(todoId: number, todoItem: HTMLLIElement): void;
    removeAllTodos(): void;
}
