import React from "react";

const FormEmail = ({ formData, setFormData, handleNextPage }) => {
  const checkPassLength = (str) => {
    return str.length >= 8;
  };

  const checkPassAlphabet = (str) => {
    return str.length >= 1 && str.match(/[a-z]/i);
  };

  const checkPassDigit = (str) => {
    return str.match(/\d/);
  };

  const validatePassword = () => {
    return (
      checkPassLength(formData.password) &&
      checkPassAlphabet(formData.password) &&
      checkPassDigit(formData.password)
    );
  };

  return (
    <>
      <div>
        <label htmlFor="">Email</label>
        <input
          required
          type="email"
          placeholder="Something ending with monterail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <p
          style={{
            color:
              formData.password === ""
                ? "black"
                : checkPassLength(formData.password)
                ? "green"
                : "red",
          }}
        >
          At least 8 characters
        </p>
        <p
          style={{
            color:
              formData.password === ""
                ? "black"
                : checkPassAlphabet(formData.password)
                ? "green"
                : "red",
          }}
        >
          At least one letter
        </p>
        <p
          style={{
            color:
              formData.password === ""
                ? "black"
                : checkPassDigit(formData.password)
                ? "green"
                : "red",
          }}
        >
          At least one digit
        </p>
      </div>

      <button> Log in instead </button>
      <button
        onClick={(e) => {
          if (formData.email !== "" && validatePassword()) {
            handleNextPage(0);
            e.preventDefault();
          }
        }}
      >
        Next Step
      </button>
    </>
  );
};

export default FormEmail;
