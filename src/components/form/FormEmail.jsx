import React, { useState } from "react";
import {
  validateStep1,
  validateEmailFormat,
  validatePassword,
  checkPassLength,
  checkPassAlphabet,
  checkPassDigit,
} from "./formHelper";
import eye from "../../medias/elements/eye.png";

const FormEmail = ({
  formData,
  setFormData,
  handleNextPage,
  page,
  formErrorsStep1,
  setFormErrorsStep1,
}) => {
  const [seePassword, setSeePassword] = useState(false);

  const colors = {
    gray: "#343541",
    green: "#27AE60",
    red: "#EC1115",
  };

  return (
    <>
      <div className="form__label">
        <label htmlFor="">Email</label>
        <input
          style={{
            border: formErrorsStep1.email ? "1px solid #EC1115" : "none",
          }}
          type="text"
          placeholder="Something ending with monterail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <p className="error__message">{formErrorsStep1.email}</p>
      </div>
      <div className="form__label">
        <label htmlFor="">Password</label>
        <span id="form__password-frame">
          <input
            style={{
              border:
                formErrorsStep1.password || formErrorsStep1.passwords
                  ? "1px solid #EC1115"
                  : "none",
            }}
            id="form__password-input"
            type={seePassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <img
            src={eye}
            id="form__password-input-eye"
            onClick={() => setSeePassword(!seePassword)}
            alt="show password"
          />
        </span>
        <p className="error__message">{formErrorsStep1.password}</p>

        <aside>
          <p
            style={{
              color:
                formData.password === ""
                  ? colors.gray
                  : checkPassLength(formData.password)
                  ? colors.green
                  : colors.red,
            }}
          >
            At least 8 characters
          </p>
          <p
            style={{
              color:
                formData.password === ""
                  ? colors.gray
                  : checkPassAlphabet(formData.password)
                  ? colors.green
                  : colors.red,
            }}
          >
            At least one letter
          </p>
          <p
            style={{
              color:
                formData.password === ""
                  ? colors.gray
                  : checkPassDigit(formData.password)
                  ? colors.green
                  : colors.red,
            }}
          >
            At least one digit
          </p>
        </aside>
      </div>
      <div className="form__buttons">
        <a className="button--login" href="./">
          Log in instead
        </a>
        <button
          className="button"
          onClick={() => {
            if (validatePassword() && formData.email !== "") {
              handleNextPage(page);
            } else {
              setFormErrorsStep1(validateStep1(formData));
            }
          }}
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default FormEmail;
