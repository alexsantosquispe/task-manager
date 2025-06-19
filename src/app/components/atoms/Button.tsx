import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  isDisabled: boolean;
  className?: string;
}

export const Button = ({
  label,
  onClick,
  icon,
  type = 'button',
  isDisabled = false,
  className
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        'flex h-12 items-center justify-center gap-1 rounded-lg bg-black/80 px-3 font-semibold text-white md:px-6',
        isDisabled
          ? 'bg-black/65 hover:cursor-not-allowed'
          : 'hover:cursor-pointer hover:bg-black',
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
