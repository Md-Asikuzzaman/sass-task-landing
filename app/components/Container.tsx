'use client';

import clsx from 'clsx';
import { NextPage } from 'next';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: NextPage<Props> = ({ children, className }) => {
  return <div className={clsx('container mx-auto', className)}>{children}</div>;
};

export default Container;
