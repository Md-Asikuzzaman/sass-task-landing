'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import SectionDesc from '../components/SectionDesc';

import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
  const appScreenRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: appScreenRef,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] md:py-24'>
      <Container>
        <SectionTitle title='Intuitive interface' />
        <SectionDesc
          className='mt-5'
          description='Celebrate the joy accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your success, one task
          at a time.'
        />
        <motion.div
          className='flex items-center justify-center'
          style={{
            opacity,
            transformPerspective: '800px',
            rotateX,
          }}
          ref={appScreenRef}
        >
          <Image
            className='mt-14'
            src={'/images/logo/app-screen.png'}
            alt={'app-screen'}
            width={0}
            height={0}
            sizes='(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 100vw'
            style={{ width: 'auto', height: 'auto' }}
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
