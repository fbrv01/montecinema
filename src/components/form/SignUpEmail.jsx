import React from 'react';
import { useState } from 'react';
import './signup.css';
import eye from '../../medias/elements/eye.png';

const SignUpEmail = () => {

	const colors = {
		gray : '#343541',
		green : '#27AE60',
		red : '#EC1115'
	}

	const [nextStep, setNextStep] = useState(false);
	const [seePassword, setSeePassword] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const checkPassLength = (str) => {
		return str.length >= 8;
	};

	const checkPassAlphabet = (str) => {
		return str.length >= 1 && str.match(/[a-z]/i);
	};

	const checkPassDigit = (str) => {
		return str.match(/\d/);
	};

	return (
		<form className='form'>
			<div className='form__label'>
				<label htmlFor=''>EMAIL</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='Something ending up with monterail.com'
				/>
			</div>
			<div className='form__label'>
				<label htmlFor=''>PASSWORD</label>

				<span id='form__password-frame'>
					<input
						id='form__password-input'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type={seePassword ? 'text' : 'password'}
						placeholder='Enter your password'
					/>
					<img
						src={eye}
						id='form__password-input-eye'
						onClick={() => setSeePassword(!seePassword)}
						alt='show password'
					/>
				</span>
			</div>

			<aside>
				<p
					style={{
						color:
							password === ''
								? colors.gray
								: checkPassLength(password)
								? colors.green
								: colors.red
					}}
				>
					At least 8 characters
				</p>
				<p
					style={{
						color:
							password === ''
								? colors.gray
								: checkPassAlphabet(password)
								? colors.green
								: colors.red
					}}
				>
					At least one letter
				</p>
				<p
					style={{
						color:
							password === ''
								? colors.gray
								: checkPassDigit(password)
								? colors.green
								: colors.red
					}}
				>
					At least one digit
				</p>
			</aside>
			
			<div className='form__button'>
				<a className='button--login'>Log in instead</a>
				<button className='button'>Next step</button>
			</div>
		</form>
	);
};

export default SignUpEmail;
