'use client';

import { Header } from './components/atoms/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { selectTasks } from './features/tasks/todoSelectors';
import { useSelector } from 'react-redux';

export default function Home() {
  const tasks = useSelector(selectTasks);

  return (
    <div className='flex flex-col'>
      <Header />
      <main className='mt-16 flex min-h-screen flex-col items-center bg-gray-100 p-2 md:p-8'>
        <div className='flex w-full flex-col gap-4 rounded-lg bg-white p-2 shadow-lg md:gap-8 md:p-8 lg:max-w-[60rem]'>
          <h1 className='text-2xl font-bold'>Today&apos;s tasks</h1>
          <div className='flex flex-col gap-6'>
            <TaskInput />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </main>
    </div>
  );
}
