'use client';

import React from 'react';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { faqs } from '../utils/data';
import FaqCard from '../components/FaqCard';

const FAQs = () => {
  return (
    <section className='bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-[72px] md:py-24'>
      <Container>
        <SectionTitle
          title='Frequently asked questions'
          className='max-w-[648px] mx-auto'
        />
        <div className='mt-12 max-w-[648px] mx-auto'>
          {faqs.map((faq, i) => (
            <FaqCard key={i} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQs;
