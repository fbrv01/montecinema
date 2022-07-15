import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FormInfo from '../FormInfo';

describe('FormInfo', () => {
  let props;

  beforeEach(() => {
    props = {
      formData: {
        email: 'email@email.com',
        password: 'abcd1234',
        firstname: '',
        lastname: 'Bucholc',
        dateOfBirth: '1999-09-09',
        isCheck: false
      },
      setFormData: jest.fn(),
      handleNextPage: jest.fn(),
      page: 1,
      formErrorsStep2: {},
      setFormErrorsStep2: jest.fn(),
    };
  });

  it('renders correctly', () => {
    render(<FormInfo {...props} />);
    const formInfo = screen.getByTestId('form-info');
    expect(formInfo).toBeInTheDocument();
  });

  it('allows typing firstname', () => {
    const firstname = 'Fil';
    render(<FormInfo {...props} />);
    const emailInput = screen.getByTestId('form-info__input-firstname');
    userEvent.type(emailInput, firstname);
    expect(props.setFormData).toHaveBeenCalled();
  });
  it('allows typing lastname', () => {
    const lastname = 'Bucholc';
    render(<FormInfo {...props} />);
    const emailInput = screen.getByTestId('form-info__input-lastname');
    userEvent.type(emailInput, lastname);
    expect(props.setFormData).toHaveBeenCalled();
  });
  it('allows typing dateOfBirth', () => {
    const dateOfBirth = '1999-01-02';
    render(<FormInfo {...props} />);
    const emailInput = screen.getByTestId('form-info__input-dateOfBirth');
    userEvent.type(emailInput, dateOfBirth);
    expect(props.setFormData).toHaveBeenCalled();
  });
});
