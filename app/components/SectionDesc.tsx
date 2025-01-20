'use client';

import clsx from 'clsx';
import { NextPage } from 'next';

interface Props {
  description: string;
  className?: string;
}

const SectionDesc: NextPage<Props> = ({ description, className }) => {
  return (
    <div className='max-w-xl mx-auto'>
      <p className={clsx('text-center text-xl text-white/70', className)}>
        {description}
      </p>
    </div>
  );
};

export default SectionDesc;
