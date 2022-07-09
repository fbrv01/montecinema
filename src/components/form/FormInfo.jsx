import React from "react";

const FormInfo = ({ formData, setFormData }) => {
  return (
    <>
      <div>
        <label htmlFor="">Firstname</label>
        <input
          required
          type="text"
          placeholder="e.g Jessica"
          value={formData.firstname}
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="">Lastname</label>
        <input
          required
          type="text"
          placeholder="e.g Walton"
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="">Date of birth</label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: [e.target.value] })
          }
        />
      </div>
      <div>
        <input type="checkbox" />
        <span>I accept Privacy Policy</span>
      </div>

      <button> Log in instead </button>
      <button>Register</button>
    </>
  );
};

export default FormInfo;
