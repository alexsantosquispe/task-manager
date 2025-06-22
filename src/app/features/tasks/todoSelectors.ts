import { RootState } from '@/app/store/store';

export const selectTasks = (state: RootState) => state.todos.tasks;

export const selectTaskToEdit = (state: RootState) => state.todos.selectedTask;
