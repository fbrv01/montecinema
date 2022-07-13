import React, { useState, useEffect } from 'react';
import FormEmail from './FormEmail';
import FormInfo from './FormInfo';
import Success from './Success';
import './signup.css';

const Form = () => {
	const maxPage = 2;
	const [page, setPage] = useState(1);
	const [isSubmit, setIsSubmit] = useState(false);
	const [formErrorsStep1, setFormErrorsStep1] = useState({});
	const [formErrorsStep2, setFormErrorsStep2] = useState({});
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		firstname: '',
		lastname: '',
		dateOfBirth: '',
		isCheck: false
	});


	const formMainTitles = ['Ahoy you!', 'Great!'];
	const formSubTitles = ['Care to register?', 'Now your name'];

	const handleNextPage = (currentPage) => {
		return setPage(currentPage + 1);
	};

	const handleSubmit = (e) => {
		console.log('submit');
		console.log(formErrorsStep2);
		e.preventDefault();
		setIsSubmit(true);
	};

	//!! SEND FORM DATA TO BACK-END HERE !!//

	useEffect(() => {

		if (Object.keys(formErrorsStep2).length === 0 && Object.keys(formErrorsStep1).length === 0 && isSubmit) {
			console.log(formData);
			handleNextPage(page);
		}
	});

	const pageDisplay = () => {
		switch (page) {
			case 1:
				return (
					<FormEmail
						formData={formData}
						setFormData={setFormData}
						handleNextPage={handleNextPage}
						page={page}
						formErrorsStep1={formErrorsStep1}
						setFormErrorsStep1={setFormErrorsStep1}
					/>
				);

			case 2:
				return (
					<FormInfo
						formData={formData}
						setFormData={setFormData}
						handleNextPage={handleNextPage}
						page={page}
						formErrorsStep2={formErrorsStep2}
						setFormErrorsStep2={setFormErrorsStep2}
					/>
				);
			default:
				return;
		}
	};

	return (
		<section className='register'>
			{page > maxPage ? (
				<Success formData={formData} />
			) : (
				<>
					<div className='form__message'>
						<h4>{formMainTitles[page - 1]}</h4>
						<h4>{formSubTitles[page - 1]}</h4>
					</div>
					<form onSubmit={handleSubmit} className='form'>
						{pageDisplay()}
					</form>
				</>
			)}
		</section>
	);
};

export default Form;