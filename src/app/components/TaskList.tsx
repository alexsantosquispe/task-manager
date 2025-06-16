import React from "react";
import { TaskItem } from "./TaskItem";
import { TaskItemType } from "../types";
import { deleteTask } from "../features/tasks/todoSlice";
import { useDispatch } from "react-redux";

interface TaskListProps {
  tasks: TaskItemType[];
}
export const TaskList = ({ tasks }: TaskListProps) => {
  const dispatch = useDispatch();

  if (!tasks.length)
    return (
      <div className="flex w-full justify-center p-8">
        There is no pending tasks.
      </div>
    );

  const onDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => {
        return <TaskItem key={task.id} {...task} onDelete={onDeleteTask} />;
      })}
    </div>
  );
};
