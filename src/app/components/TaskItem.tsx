import { CloseIcon } from "../icons/CloseIcon";
import { TaskItemType } from "../types";
import { toggleTask } from "../features/tasks/todoSlice";
import { useDispatch } from "react-redux";

interface TaskItemProps extends TaskItemType {
  onDelete: (id: string) => void;
}

export const TaskItem = ({
  id,
  description,
  isCompleted,
  onDelete
}: TaskItemProps) => {
  const dispatch = useDispatch();

  const onCompleteTask = () => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="flex w-full p-4 justify-between border border-gray-200 rounded-lg">
      <div className="flex gap-4 items-center group">
        <input
          id={id}
          type="checkbox"
          checked={isCompleted}
          className="accent-black w-4 h-4 group-hover:cursor-pointer"
          onChange={onCompleteTask}
        />
        <label
          htmlFor={id}
          className={`font-medium group-hover:cursor-pointer ${
            isCompleted && "text-gray-300 line-through"
          }`}
        >
          {description}
        </label>
      </div>

      <button
        className="text-black/70 hover:text-black cursor-pointer"
        onClick={() => onDelete(id)}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
