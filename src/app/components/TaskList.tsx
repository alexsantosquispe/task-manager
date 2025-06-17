import React from 'react';
import { TaskItem } from './TaskItem';
import { TaskItemType } from '../types';
import { selectTaskToEdit } from '../features/tasks/todoSelectors';
import { useSelector } from 'react-redux';

interface TaskListProps {
  tasks: TaskItemType[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const taskSelected = useSelector(selectTaskToEdit);

  if (!tasks.length)
    return (
      <div className='flex h-40 w-full items-center justify-center'>
        There is no pending tasks.
      </div>
    );

  return (
    <div className='flex flex-col gap-2'>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            {...task}
            isSelected={taskSelected?.id === task.id}
          />
        );
      })}
    </div>
  );
};
