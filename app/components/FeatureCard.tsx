'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

interface Props {
  features: {
    title: string;
    description: string;
  };
}

export const FeatureCard: NextPage<Props> = ({
  features: { title, description },
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(150px 150px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      console.log(e.x);

      if (!borderRef.current) return;

      const borderRect = borderRef.current?.getBoundingClientRect();

      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div className='border border-white/30 px-5 py-10 text-center rounded-xl relative'>
      <motion.div
        className='absolute inset-0 border-2 border-purple-500 rounded-xl'
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={borderRef}
      ></motion.div>
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
