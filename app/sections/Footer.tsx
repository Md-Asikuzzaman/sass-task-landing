'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../components/Container';
import dynamic from 'next/dynamic';

const Instagram = dynamic(() => import('./../social-icon/insta.svg'), {
  ssr: false,
});
const Linkedin = dynamic(() => import('./../social-icon/linkedin.svg'), {
  ssr: false,
});
const Tiktok = dynamic(() => import('./../social-icon/tiktok.svg'), {
  ssr: false,
});
const Twitter = dynamic(() => import('./../social-icon/x-social.svg'), {
  ssr: false,
});
const Pinterest = dynamic(() => import('./../social-icon/pinterest.svg'), {
  ssr: false,
});
const Youtube = dynamic(() => import('./../social-icon/youtube.svg'), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className='bg-black text-white/60 py-5 border-t border-white/20'>
      <Container>
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
          <p className='text-center'>
            &copy; {new Date().getFullYear()} [Your Company], Inc. All rights
            reserved.
          </p>
          <div className='flex justify-center items-center gap-2.5'>
            <Link href='#'>
              <Instagram />
            </Link>
            <Link href='#'>
              <Linkedin />
            </Link>
            <Link href='#'>
              <Twitter />
            </Link>
            <Link href='#'>
              <Tiktok />
            </Link>
            <Link href='#'>
              <Pinterest />
            </Link>
            <Link href='#'>
              <Youtube />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
