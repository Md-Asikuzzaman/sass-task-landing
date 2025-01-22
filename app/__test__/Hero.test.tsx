import { render, screen } from '@testing-library/react';
import Hero from '../sections/Hero';

describe('Rendering Hero Section', () => {
  test('find hero section title', () => {
    render(<Hero />);

    const text = screen.getByText(/one task at a time/i);
    expect(text).toBeInTheDocument();
  });

  test('find hero section button', () => {
    render(<Hero />);

    const btn = screen.getByRole('button', { name: 'Get for free' });
    expect(btn).toBeInTheDocument();
  });
});
