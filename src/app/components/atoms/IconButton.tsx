import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

const IconButton = ({
  children,
  onClick,
  ariaLabel,
  className
}: IconButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={twMerge(
        'flex h-9 w-9 items-center justify-center rounded text-black/50 hover:cursor-pointer hover:bg-gray-100 hover:text-black',
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
