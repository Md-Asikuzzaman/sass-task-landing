'use client';

import React from 'react';
import Container from '../components/Container';
import { FeatureCard } from '../components/FeatureCard';
import { features } from '../utils/data';
import { SectionTitle } from '../components/SectionTitle';
import SectionDesc from '../components/SectionDesc';

const Features = () => {
  return (
    <section className='bg-black text-white py-[72px] md:py-24'>
      <Container>
        <SectionTitle title='Everything you need' />
        <SectionDesc
          className='mt-5'
          description='Enjoy customizable lists, team work tools, and smart tracking all in
            one place! Set tasks, get reminders, and see your progress simply
            and quickly.'
        />

        <div className='mt-16 flex flex-col md:flex-row gap-4'>
          {features.map((features, i) => (
            <FeatureCard key={i} features={features} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
