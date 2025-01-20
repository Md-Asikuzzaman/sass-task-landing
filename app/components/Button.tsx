'use client';

import clsx from 'clsx';
import { NextPage } from 'next';

interface Props {
  children: React.ReactNode;
  type: 'medium' | 'large';
  className?: string;
}

export const Button: NextPage<Props> = ({ children, type, className }) => {
  const btn =
    (type === 'medium' && 'py-2 px-4') ||
    (type === 'large' && 'py-3 px-5 font-medium');

  return (
    <button className={clsx('bg-white text-black rounded-lg', btn, className)}>
      {children}
    </button>
  );
};
