import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/layout/Footer/Footer';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';

describe('Footer Component', () => {
  const renderFooter = () => {
    return render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
  };

  it('renders without crashing', () => {
    renderFooter();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays the static copyright notice', () => {
    renderFooter();
    expect(screen.getByText('© 2025 Lingua Voice')).toBeInTheDocument();
  });

  it('contains GitHub link with icon', () => {
    renderFooter();
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Yuliafire');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink.querySelector('svg')).toBeInTheDocument();
  });

  it('contains RS School link with icon', () => {
    renderFooter();
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
    renderFooter();
    const svgs = screen.getAllByRole('img', { hidden: true });
    expect(svgs.length).toBe(2);
  });
});
