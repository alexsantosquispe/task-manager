import { RootState } from "@/app/store/store";

export const selectTasks = (state: RootState) => state.todos.tasks;
