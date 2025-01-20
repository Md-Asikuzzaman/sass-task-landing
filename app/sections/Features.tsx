import React from 'react';
import Container from '../components/Container';
import { FeatureCard } from '../components/FeatureCard';
import { features } from '../utils/data';

const Features = () => {
  return (
    <section className='bg-black text-white py-[72px] md:py-24'>
      <Container>
        <h2 className='text-center font-bold text-5xl md:text-6xl tracking-tighter'>
          Everything you need
        </h2>

        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place! Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

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
