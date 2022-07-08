import React from "react";
import { useState } from "react";
import "./signup.css";

const SignUpEmail = () => {
	const [nextStep, setNextStep] = useState(false);
	const [seePassword, setSeePassword] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
		<form className="form">
			<div className="form__label">
				<label htmlFor="">EMAIL</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Something ending up with monterail.com"
				/>
			</div>
			<div className="form__label">
				<label htmlFor="">PASSWORD</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type={seePassword ? "text" : "password"}
					placeholder="Enter your password"
				/>
				{/* THIS BUTTON WILL BE CHANGED INTO ICON */}
				<button onClick={() => setSeePassword(!seePassword)}>See</button>
				<p
					style={{
						color:
							password.length == ""
								? "black"
								: checkPassLength(password)
								? "green"
								: "red",
					}}
				>
					At least 8 characters
				</p>
				<p
					style={{
						color:
							password.length == ""
								? "black"
								: checkPassAlphabet(password)
								? "green"
								: "red",
					}}
				>
					At least one letter
				</p>
				<p
					style={{
						color:
							password.length == ""
								? "black"
								: checkPassDigit(password)
								? "green"
								: "red",
					}}
				>
					At least one digit
				</p>
			</div>
			<div className="form__button">
				<a className="button--login">Log in instead</a>
				<button className="button">Next step</button>
			</div>
		</form>
	);
};

export default SignUpEmail;
