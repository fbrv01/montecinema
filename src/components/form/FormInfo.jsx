import React from "react";

const FormInfo = ({ formData, setFormData }) => {
	return (
		<>
			<div className="form__label">
				<label htmlFor="">Firstname</label>
				<input
					type="text"
					placeholder="e.g Jessica"
					value={formData.firstname}
					onChange={(e) =>
						setFormData({ ...formData, firstname: e.target.value })
					}
				/>
			</div>
			<div className="form__label">
				<label htmlFor="">Lastname</label>
				<input
					type="text"
					placeholder="e.g Walton"
					value={formData.lastname}
					onChange={(e) =>
						setFormData({ ...formData, lastname: e.target.value })
					}
				/>
			</div>
			<div className="form__label">
				<label htmlFor="">Date of birth</label>
				<input
					type="date"
					value={formData.dateOfBirth}
					onChange={(e) =>
						setFormData({ ...formData, dateOfBirth: e.target.value })
					}
				/>
			</div>
			<div>
				<input type="checkbox" />
				<span>I accept Privacy Policy</span>
			</div>

			<div className="form__button">
				<a className="button--login">Log in instead</a>
				<button className="button">Register</button>
			</div>
		</>
	);
};

export default FormInfo;
