import { Todo } from "../ts/types";
export declare function saveTodos(todos: Todo[]): void;
export declare function loadTodos(): Todo[];
export declare function deleteTodo(todoId: number): void;
export declare function deleteAppDB(): void;
