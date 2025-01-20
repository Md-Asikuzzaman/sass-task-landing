'use client';
import clsx from 'clsx';
import { NextPage } from 'next';

interface Props {
  title: string;
  className?: string;
}

export const SectionTitle: NextPage<Props> = ({ title, className }) => {
  return (
    <h3
      className={clsx(
        'text-center text-5xl md:text-6xl font-bold tracking-tighter',
        className
      )}
    >
      {title}
    </h3>
  );
};
