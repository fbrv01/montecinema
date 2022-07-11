import React from "react";

const Success = ({ formData }) => {
	return (
		<div className="form__success-message">
			<h4>Good job {formData.firstname}!</h4>
			<p>We have sent you an email to <span className="--bold">{formData.email}</span>.<br/>Make sure to click the link from the message to activate your account.</p>
			<a href="./" className="button">Go to homepage</a>
		</div>
	);
};

export default Success;
