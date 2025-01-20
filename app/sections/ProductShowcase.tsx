'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import SectionDesc from '../components/SectionDesc';

const ProductShowcase = () => {
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
        <div className='flex items-center justify-center'>
          <Image
            className='mt-14'
            src={'/images/logo/app-screen.png'}
            alt={'app-screen'}
            width={0}
            height={0}
            sizes='(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 100vw'
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
