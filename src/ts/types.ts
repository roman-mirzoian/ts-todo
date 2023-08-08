export type Todo = {
	id: number,
	title: string,
	planned: boolean,
	inProgress: boolean,
	completed: boolean
};

export enum TodoStatus {
	PLANNED = "Planned",
	IN_PROGRESS = "In progress",
	COMPLETED = "Completed"
}