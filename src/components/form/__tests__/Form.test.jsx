import { render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form', () => {
  it('renders correctly', () => {
    render(<Form />);
    const register = screen.getByTestId('register');
    expect(register).toBeInTheDocument();
  });
});