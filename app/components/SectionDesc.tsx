'use client';

import { NextPage } from 'next';
import clsx from 'clsx';

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
