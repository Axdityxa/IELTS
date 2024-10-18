import { FC, ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white shadow-xl rounded-lg p-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};
