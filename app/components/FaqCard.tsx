'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import clsx from 'clsx';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface Props {
  faq: {
    question: string;
    answer: string;
  };
}

const FaqCard: NextPage<Props> = ({ faq: { question, answer } }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='py-7 border-b border-white/30'>
      <div
        className='flex items-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='flex-1 text-lg font-bold'>{question}</span>
        {!isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </div>
      <div className={clsx('mt-4 text-white/70', !isOpen && 'hidden')}>
        {answer}
      </div>
    </div>
  );
};

export default FaqCard;
