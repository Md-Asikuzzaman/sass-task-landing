'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../components/Container';

import Instagram from './../social-icon/insta.svg';
import Linkedin from './../social-icon/linkedin.svg';
import Tiktok from './../social-icon/tiktok.svg';
import Twitter from './../social-icon/x-social.svg';
import Pinterest from './../social-icon/pinterest.svg';
import Youtube from './../social-icon/youtube.svg';

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
