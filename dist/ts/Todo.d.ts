import { Todo } from "./types";
export default class TodoApp {
    private todos;
    constructor();
    loadTodos(): Todo[];
    addTodo(titleValue: string): Todo;
    saveTodos(): void;
    deleteTodo(todoId: number): void;
    deleteAllTodos(): void;
}
