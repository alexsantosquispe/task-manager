import {
  cleanSelectedTask,
  deleteTask,
  selectTask,
  toggleCompleteTask
} from '../features/tasks/todoSlice';

import CloseIcon from '../icons/CloseIcon';
import { EditIcon } from '../icons/EditIcon';
import IconButton from './atoms/IconButton';
import { TaskItemType } from '../types';
import { TrashIcon } from '../icons/TrashIcon';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useDispatch } from 'react-redux';

interface TaskItemProps extends TaskItemType {
  isSelected: boolean;
}

export const TaskItem = ({
  id,
  description,
  isCompleted,
  isSelected
}: TaskItemProps) => {
  const dispatch = useDispatch();

  const onCompleteTask = () => {
    dispatch(toggleCompleteTask(id));
  };

  const selectTaskToEdit = (task: TaskItemType) => {
    dispatch(selectTask(task));
  };

  const unSelectTask = () => {
    dispatch(cleanSelectedTask());
  };

  const onDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div
      className={twMerge(
        'flex w-full flex-col justify-between rounded-lg border border-gray-200 p-2 md:flex-row md:gap-8',
        clsx({ 'border-black bg-gray-100': isSelected })
      )}
    >
      <div className='group flex items-center gap-4 p-2'>
        <div>
          <input
            id={id}
            type='checkbox'
            checked={isCompleted}
            className='h-4 w-4 accent-black group-hover:cursor-pointer'
            onChange={onCompleteTask}
          />
        </div>

        <label
          htmlFor={id}
          className={`font-medium group-hover:cursor-pointer ${
            isCompleted && 'text-gray-300 line-through'
          }`}
        >
          {description}
        </label>
      </div>

      <div className='flex justify-end gap-3 border-t border-gray-200 pt-2 md:border-none md:pt-0'>
        {isSelected ? (
          <IconButton onClick={() => unSelectTask()}>
            <CloseIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => selectTaskToEdit({ id, description, isCompleted })}
          >
            <EditIcon />
          </IconButton>
        )}
        <IconButton onClick={() => onDeleteTask(id)}>
          <TrashIcon />
        </IconButton>
      </div>
    </div>
  );
};
