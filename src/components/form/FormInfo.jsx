import React from 'react';
import { validateStep2, ageValidate } from './formHelper';

const FormInfo = ({
  formData,
  setFormData,
  formErrorsStep2,
  setFormErrorsStep2,
  page,
  handleNextPage
}) => {
  return (
    <>
      <div className='form__label'>
        <label htmlFor=''>Firstname</label>
        <input
          style={{
            border: formErrorsStep2.firstname ? '1px solid #EC1115' : 'none',
          }}
          type='text'
          placeholder='e.g Jessica'
          value={formData.firstname}
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <p className='error__message'>{formErrorsStep2.firstname}</p>
      </div>
      <div className='form__label'>
        <label htmlFor=''>Lastname</label>
        <input
          style={{ border: formErrorsStep2.lastname ? '1px solid #EC1115' : 'none' }}
          type='text'
          placeholder='e.g Walton'
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <p className='error__message'>{formErrorsStep2.lastname}</p>
      </div>
      <div className='form__label'>
        <label htmlFor=''>Date of birth</label>
        <input
          style={{
            border:
			formErrorsStep2.dateOfBirth || formErrorsStep2.dob
                ? '1px solid #EC1115'
                : 'none',
          }}
          type='date'
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
        />
        <p className='error__message'>{formErrorsStep2.dateOfBirth}</p>
      </div>

      <aside>
        <p style={{ color: formErrorsStep2.dob ? '#EC1115' : 'var(--gray-tuna)' }}>
          You should be minimum 18 years old
        </p>
        <span>
          <input
            style={{
              border: formErrorsStep2.isCheck
                ? '0.0625rem solid #EC1115'
                : '0.0625rem solid #AEAEB3',
            }}
            type='checkbox'
            id='policy'
            name='policy'
            onChange={(e) =>
              setFormData({ ...formData, isCheck: e.target.checked })
            }
          />
          <label
            htmlFor='policy'
            style={{ color: formErrorsStep2.isCheck ? '#EC1115' : '#000' }}
          >
            I accept <span>Privacy Policy</span>
          </label>
        </span>
      </aside>

      <div className='form__buttons'>
        <a className='button--login' href='./'>
          Log in instead
        </a>
        <button
          onClick={() => {
            if (formData.firstname !== '' && formData.lastname !== '' && formData.dateOfBirth!=='' && formData.isCheck && ageValidate(formData.dateOfBirth) ){
              handleNextPage(page);
            } else {
				setFormErrorsStep2(validateStep2(formData));
            }
          }}
          className='button'
        >
          Register
        </button>
      </div>
    </>
  );
};

export default FormInfo;
