import Link from 'next/link';
import Container from './Container';

export const Banner = () => {
  return (
    <section className='py-3 text-center bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)]'>
      <Container>
        <p className='font-medium'>
          <span className='hidden md:inline'>
            Introducing a completely redesigned interface -{' '}
          </span>
          <Link href='/' className='underline underline-offset-4'>
            Explore the demo
          </Link>
        </p>
      </Container>
    </section>
  );
};
