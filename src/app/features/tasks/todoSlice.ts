import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TaskItemType } from "../../types";
import { tasksMock } from "../../mockData";

type TodoState = {
  tasks: TaskItemType[];
};

const initialState: TodoState = {
  tasks: tasksMock
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
    deleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    }
  }
});

export const { addNewTask, deleteTask, toggleTask } = todoSlice.actions;

export default todoSlice.reducer;
