'use client';

import React from 'react';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import SectionDesc from '../components/SectionDesc';
import { Button } from '../components/Button';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className='bg-black text-white py-[72px] md:py-24 overflow-clip'>
      <Container className='relative max-w-xl'>
        <SectionTitle title='Get instant access' />
        <SectionDesc
          description='Celebrate the joy accomplishment with an app designed to track your progress and motivate your efforts.'
          className='mt-5'
        />
        <form className='mt-10 flex flex-col md:flex-row gap-2.5 max-w-sm mx-auto'>
          <input
            type='text'
            placeholder='example@gmail.com'
            className='h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] outline-none md:flex-1'
          />
          <Button type='medium' className='h-12 px-5'>
            Get access
          </Button>
        </form>
        {/* ui design */}

        <div className='h-48 w-48 absolute -top-[50px] -left-[200px] hidden md:inline'>
          <Image src={'/images/ui/emojistar.png'} alt={'img'} fill />
        </div>
        <div className='h-48 w-48 absolute top-[10px] -right-[200px] hidden md:inline'>
          <Image src={'/images/ui/helix2.png'} alt={'img'} fill />
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
