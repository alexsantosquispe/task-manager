import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  type?: "button" | "reset" | "submit";
  isDisabled: boolean;
  className?: string;
}

export const Button = ({
  label,
  onClick,
  icon,
  type = "button",
  isDisabled = false,
  className
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        "flex gap-1 px-3 items-center md:px-6 bg-black/80 h-12 text-white rounded-lg font-semibold",
        isDisabled
          ? "bg-black/65 hover:cursor-not-allowed"
          : "hover:bg-black hover:cursor-pointer",
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon ? icon : null}
      {label}
    </button>
  );
};
