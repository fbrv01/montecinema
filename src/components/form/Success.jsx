import React from "react";

const Success = ({ formData }) => {
	return (
		<div>
			<p>
				We have sent you an email to {formData.email}. Make sure to click the
				link from the message to activate your account.
			</p>
			<button className="button">Go to homepage</button>
		</div>
	);
};

export default Success;
