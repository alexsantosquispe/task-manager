import React, { ChangeEvent, useEffect, useState } from 'react';
import { addNewTask, editTask } from '../features/tasks/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './atoms/Button';
import { selectTaskToEdit } from '../features/tasks/todoSelectors';

export const TaskInput = () => {
  const dispatch = useDispatch();
  const taskSelected = useSelector(selectTaskToEdit);
  const [task, setTask] = useState('');

  const onChangeTask = (event: ChangeEvent<HTMLInputElement>) =>
    setTask(event.target.value);

  const actionButton = () => {
    if (taskSelected) {
      dispatch(editTask({ id: taskSelected.id, description: task }));
    } else {
      dispatch(addNewTask(task));
    }
    setTask('');
  };

  useEffect(() => {
    setTask(taskSelected?.description || '');
  }, [taskSelected]);

  return (
    <div className='flex w-full flex-col gap-2 md:flex-row'>
      <div className='flex flex-1'>
        <input
          type='text'
          id='new-task'
          placeholder='Enter a task...'
          className='flex h-12 flex-1 rounded-lg border border-gray-200 bg-gray-100 px-4'
          value={task}
          onChange={onChangeTask}
        />
      </div>

      <Button
        label={`${taskSelected ? 'Edit' : 'Add'}`}
        onClick={actionButton}
        isDisabled={!task.trim().length}
      />
    </div>
  );
};
