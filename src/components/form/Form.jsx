import React, { useState, useEffect } from "react";
import FormEmail from "./FormEmail";
import FormInfo from "./FormInfo";
import Success from "./Success";
import { validate } from "./formHelper";
import './signup.css'

const Form = () => {
	const [page, setPage] = useState(0);
	const [isSubmit, setIsSubmit] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		firstname: "",
		lastname: "",
		dateOfBirth: "",
	});

	const formMainTitles = ["Ahoy you!","Great!",`Good job ${formData.firstname}`];
	const formSubTitles = ["Care to register?", "Now your name"];

	const handleNextPage = (currentPage) => {
		return setPage(currentPage + 1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formData));
		setIsSubmit(true);
	};

	//!! SEND FORM DATA TO BACK-END HERE !!//

	useEffect(() => {
		console.log("formErrors", formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formData);
			handleNextPage(page);
		}
	}, [formErrors]);

	const pageDisplay = () => {
		switch (page) {
			case 0:
				return (
					<FormEmail
						formData={formData}
						setFormData={setFormData}
						handleNextPage={handleNextPage}
						page={page}
						formErrors={formErrors}
					/>
				);

			case 1:
				return (
					<FormInfo
						formData={formData}
						setFormData={setFormData}
						formErrors={formErrors}
					/>
				);

			case 2:
				return <Success formData={formData} />;

			default:
				console.log("hello");
		}
	};

	return (
	  <>
			<h1>{formMainTitles[page]}</h1>
			<h1>{formSubTitles[page]}</h1>
			<form onSubmit={handleSubmit} className="form">
				{pageDisplay()}
			</form>
		</>
	);
};

export default Form;
