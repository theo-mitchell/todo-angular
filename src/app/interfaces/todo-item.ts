export interface TodoItem {
    name: string 
    description: string
    dueDate: string
    priority?: 'High'|'Medium'|'Low'
    id?: number;
    projectId: number;
}
