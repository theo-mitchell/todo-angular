import { TodoItem } from './todo-item'

export interface Project {
    id?: number;
    name: string;
    todoItems?: TodoItem[]
}
