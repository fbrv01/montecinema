import React, { useState, useEffect } from "react";
import FormEmail from "./FormEmail";
import FormInfo from "./FormInfo";
import Success from "./Success";
import { validate } from "./formHelper";
import "./signup.css";

const Form = () => {
	const maxPage = 2;
	const [page, setPage] = useState(1);
	const [isSubmit, setIsSubmit] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		firstname: "",
		lastname: "",
		dateOfBirth: "",
		isCheck: false
	});

	const formMainTitles = ["Ahoy you!", "Great!"];
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
			case 1:
				return (
					<FormEmail
						formData={formData}
						setFormData={setFormData}
						handleNextPage={handleNextPage}
						page={page}
						formErrors={formErrors}
					/>
				);

			case 2:
				return (
					<FormInfo
						formData={formData}
						setFormData={setFormData}
						formErrors={formErrors}
					/>
				);
			default:
				return;
		}
	};

	return (
		<section className="register">
			{page > maxPage ? (
				<Success formData={formData} />
			) : (
				<>
					<div className="form__message">
						<h4>{formMainTitles[page - 1]}</h4>
						<h4>{formSubTitles[page - 1]}</h4>
					</div>
					<form onSubmit={handleSubmit} className="form">
						{pageDisplay()}
					</form>
				</>
			)}
		</section>
	);
};

export default Form;
