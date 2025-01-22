'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../components/Container';
import Image from 'next/image';

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
              <Image
                src={'/images/social-icon/insta.svg'}
                alt={'social'}
                height={30}
                width={30}
              />
            </Link>
            <Link href='#'>
              <Image
                src={'/images/social-icon/linkedin.svg'}
                alt={'social'}
                height={30}
                width={30}
              />
            </Link>
            <Link href='#'>
              <Image
                src={'/images/social-icon/tiktok.svg'}
                alt={'social'}
                height={30}
                width={30}
              />
            </Link>
            <Link href='#'>
              <Image
                src={'/images/social-icon/x-social.svg'}
                alt={'social'}
                height={30}
                width={30}
              />
            </Link>
            <Link href='#'>
              <Image
                src={'/images/social-icon/pinterest.svg'}
                alt={'social'}
                height={30}
                width={30}
              />
            </Link>
            <Link href='#'>
              <Image
                src={'/images/social-icon/youtube.svg'}
                alt={'social'}
                height={30}
                width={30}
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
