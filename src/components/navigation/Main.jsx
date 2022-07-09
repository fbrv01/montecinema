import React from "react";
import Form from "../form/Form";
import SignUpEmail from "../form/SignUpEmail";
import SignUpName from "../form/SignUpName";
import './main.css'

const Main = () => {
  return (
    <section className='main'>
{/*       <Form /> */}
      <SignUpEmail />
{/*      <SignUpName /> */}
    </section>
  )
}

export default Main