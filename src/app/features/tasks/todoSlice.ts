import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TaskItemType } from "../../types";
import { tasksMock } from "../../mockData";

type TodoState = {
  tasks: TaskItemType[];
  selectedTask: TaskItemType | null;
};

const initialState: TodoState = {
  tasks: tasksMock,
  selectedTask: null
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now().toString(),
        description: action.payload,
        isCompleted: false
      };
      state.tasks.push(newTodo);
    },
    editTask: (
      state,
      action: PayloadAction<Omit<TaskItemType, "isCompleted">>
    ) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);

      if (task) {
        task.description = description;
        state.selectedTask = initialState.selectedTask;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    selectTask: (state, action: PayloadAction<TaskItemType>) => {
      state.selectedTask = action.payload;
    },
    cleanSelectedTask: (state) => {
      state.selectedTask = initialState.selectedTask;
    },
    toggleCompleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    }
  }
});

export const {
  addNewTask,
  editTask,
  deleteTask,
  selectTask,
  cleanSelectedTask,
  toggleCompleteTask
} = todoSlice.actions;

export default todoSlice.reducer;
