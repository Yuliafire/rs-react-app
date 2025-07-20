import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/layout/Footer/Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays the current year in copyright', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(`© ${currentYear} My App`)).toBeInTheDocument();
  });

  it('contains GitHub link with icon', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Yuliafire');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink.querySelector('svg')).toBeInTheDocument();
  });

  it('contains RS School link with icon', () => {
    render(<Footer />);
    const rsLink = screen.getByRole('link', { name: 'RS School' });
    expect(rsLink).toHaveAttribute(
      'href',
      'https://www.instagram.com/yulia_speakandcode?igsh=cGloenRtcmcwM2N0'
    );
    expect(rsLink).toHaveAttribute('target', '_blank');
    expect(rsLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(rsLink.querySelector('svg')).toBeInTheDocument();
  });

  it('renders both icons', () => {
    render(<Footer />);
    const svgs = screen.getAllByRole('img', { hidden: true });
    expect(svgs.length).toBe(2);
  });
});
