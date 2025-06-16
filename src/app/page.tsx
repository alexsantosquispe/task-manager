"use client";

import { Header } from "./components/atoms/Header";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { selectTasks } from "./features/tasks/todoSelectors";
import { useSelector } from "react-redux";

export default function Home() {
  const tasks = useSelector(selectTasks);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col p-4 md:p-8 bg-gray-100 items-center min-h-screen mt-16">
        <div className="flex flex-col gap-4 md:gap-8 bg-white shadow-lg w-full p-4 md:p-8 rounded-lg md:w-[60rem]">
          <h1 className="font-bold text-xl">Today&apos;s tasks</h1>

          <div className="flex flex-col gap-6">
            <TaskInput />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </main>
    </div>
  );
}
