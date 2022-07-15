import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Renders initial elements', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    const main = screen.getByTestId('main');
    const register = screen.getByTestId('register');
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });
});
