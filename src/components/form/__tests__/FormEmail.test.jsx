import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FormEmail from '../FormEmail';

describe('FormEmail', () => {
  let props;

  beforeEach(() => {
    props = {
      formData: {
        email: 'email@email.com',
        password: 'abcd1234',
        firstname: 'Filip',
        lastname: 'Bucholc',
        dateOfBirth: '1999-09-09',
        isCheck: false
      },
      setFormData: jest.fn(),
      handleNextPage: jest.fn(),
      page: 1,
      formErrorsStep1: {},
      setFormErrorsStep1: jest.fn(),
    };
  });

  it('renders correctly', () => {
    render(<FormEmail {...props} />);
    const formEmail = screen.getByTestId('form-email');
    expect(formEmail).toBeInTheDocument();
  });

  it('allows typing email', () => {
    const email = 'filip_b@monterail.com';
    render(<FormEmail {...props} />);
    const emailInput = screen.getByTestId('form-email__input-email');
    userEvent.type(emailInput, email);
    expect(props.setFormData).toHaveBeenCalled();
  });

  it('allows typing password', () => {
    const password = 'filip123';
    render(<FormEmail {...props} />);
    const passwordInput = screen.getByTestId('form-email__input-password');
    userEvent.type(passwordInput, password);
    expect(props.setFormData).toHaveBeenCalled();
  });
});
