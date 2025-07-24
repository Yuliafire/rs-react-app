import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { About } from '../src/pages/about/About';
import '@testing-library/jest-dom/vitest';

vi.mock('../src/pages/about/About.module.scss', () => ({
  default: {
    about: 'about',
    authorInfo: 'authorInfo',
    courseInfo: 'courseInfo',
    backLink: 'backLink',
  },
}));

describe('About Component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.getByText('About This Project')).toBeInTheDocument();
    expect(screen.getByText('Author Information')).toBeInTheDocument();
    expect(
      screen.getByText('Created by Yulia Podgurskaia')
    ).toBeInTheDocument();
    expect(screen.getByText(/GitHub:/)).toBeInTheDocument();
    expect(screen.getByText('@Yuliafire')).toBeInTheDocument();
    expect(
      screen.getByText(/This project was developed as part of the/)
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const aboutDiv = screen.getByText('About This Project').closest('div');
    expect(aboutDiv).toHaveClass('about');

    const authorSection = screen
      .getByText('Author Information')
      .closest('section');
    expect(authorSection).toHaveClass('authorInfo');
  });

  it('renders GitHub link with correct attributes', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const githubLink = screen.getByRole('link', { name: '@Yuliafire' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Yuliafire');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders RS School link with correct attributes', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const rsSchoolLink = screen.getByRole('link', {
      name: 'RS School React Course',
    });
    expect(rsSchoolLink).toHaveAttribute('href', 'https://rs.school/react/');
    expect(rsSchoolLink).toHaveAttribute('target', '_blank');
    expect(rsSchoolLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
