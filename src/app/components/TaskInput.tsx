import React, { ChangeEvent, useState } from "react";

import { Button } from "./atoms/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { addNewTask } from "../features/tasks/todoSlice";
import { useDispatch } from "react-redux";

export const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTask(value);
  };

  const addTask = () => {
    dispatch(addNewTask(task));
    setTask("");
  };

  return (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        id="new-task"
        placeholder="Enter a task..."
        className="flex flex-1 px-4 bg-gray-100 rounded-lg h-12"
        value={task}
        onChange={onChangeTask}
      />
      <Button
        label="Add"
        onClick={addTask}
        icon={<PlusIcon />}
        isDisabled={!task.trim().length}
      />
    </div>
  );
};
