import { render, screen } from '@testing-library/react';
import {Questions} from './Questions';

describe('Questions', () => {
  test('Renders the Question component', () => {
    render(<Questions />);
    const title = screen.getByText(/Questions/i);
    expect(title).toBeInTheDocument();
  });
  test('Renders the Add Question button', () => {
    render(<Questions />);
    const button = screen.getByText(/Add Question/i);
    expect(button).toBeInTheDocument();
  })
})
