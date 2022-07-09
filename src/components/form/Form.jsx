import React, { useState } from "react";
import FormEmail from "./FormEmail";
import FormInfo from "./FormInfo";
import Success from "./Success";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    dateOfBirth: "",
  });

  const formMainTitles = ["Ahoy you!", "Great!", "Good job Georgia!"];
  const formSubTitles = [
    "Care to register?",
    "Now your name",
  ];
  const buttonTitles = ["Next step", "Register", "Go to Homepage"];

  const handleNextPage = (currentPage) => {
    return setPage(currentPage + 1);
  };

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <FormEmail
            formData={formData}
            setFormData={setFormData}
            handleNextPage={handleNextPage}
          />
        );

      case 1:
        return <FormInfo formData={formData} setFormData={setFormData} />;

      case 2:
        return <Success />;
    }
  };

  return (
    <div className="form">
      <h1>{formMainTitles[page]}</h1>
      <h1>{formSubTitles[page]}</h1>
      <form className="form__container">{pageDisplay()}</form>
    </div>
  );
};

export default Form;
