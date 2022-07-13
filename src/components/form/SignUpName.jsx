import React from 'react';
import './signup.css'

const SignUpName = () => {
  return (
    <div>
      <form className='form'>
        <div className='form__label'>
          <label htmlFor=''>FIRST NAME</label>
          <input
            type='text'
            placeholder='e.g Jessica'
          />
        </div>
        <div className='form__label'>
          <label htmlFor=''>LASTNAME</label>
          <input type='text' placeholder='e.g Walton' />
        </div>
        <div className='form__label'>
          <label htmlFor=''>DATE OF BIRTH</label>
          <input type='date' placeholder='DD / MM / YYYY' />
        </div>

        <div className='form__label'>
          <input type='checkbox' />
          <span> I accept <a href='#'> Privacy Policy</a> </span>
        </div>
        <div className='form__button'>
          <button>Log in instead</button>
          <button>Next step</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpName;
