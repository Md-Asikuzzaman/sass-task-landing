'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  faq: {
    question: string;
    answer: string;
  };
}

const AccordionItem: NextPage<Props> = ({ faq: { question, answer } }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='py-7 border-b border-white/30'>
      <div
        className='flex items-center cursor-pointer select-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='flex-1 text-lg font-bold'>{question}</span>
        {!isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='text-white/70'
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: '16px',
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
