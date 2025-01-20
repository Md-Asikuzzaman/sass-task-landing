'use client';

import { NextPage } from 'next';
import Image from 'next/image';

interface Props {
  features: {
    title: string;
    description: string;
  };
}

export const FeatureCard: NextPage<Props> = ({
  features: { title, description },
}) => {
  return (
    <div className='border border-white/30 px-5 py-10 text-center rounded-xl'>
      <div className='relative inline-flex items-center justify-center h-14 w-14 bg-white rounded-lg md:flex-1'>
        <Image
          src={'/images/icons/ecosystem.svg'}
          alt={'icon'}
          height={35}
          width={35}
        />
      </div>
      <h3 className='mt-6 font-bold'>{title}</h3>
      <p className='mt-2 text-white/70'>{description}</p>
    </div>
  );
};
