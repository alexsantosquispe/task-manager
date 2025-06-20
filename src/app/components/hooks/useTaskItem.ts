import {
  cleanSelectedTask,
  deleteTask,
  selectTask,
  toggleCompleteTask
} from '@/app/features/tasks/todoSlice';

import { TaskItemType } from '@/app/types';
import { useDispatch } from 'react-redux';

export const useTaskItem = (taskId: string) => {
  const dispatch = useDispatch();

  const onCompleteTask = () => {
    dispatch(toggleCompleteTask(taskId));
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

  return {
    onCompleteTask,
    selectTaskToEdit,
    unSelectTask,
    onDeleteTask
  };
};
