import React from "react";
import { FaInstagram } from "react-icons/fa";


import { FormComponents, Button } from "../index";
import { Formik, Form, FormikErrors } from "formik";
import { contactFormSchema } from "../../schema/formSchema";

import { sendResponse } from "../../discord";


const ContactForm = () => {

  const { TextField, SelectField, TextareaField, TagField } = FormComponents; //Form Components

  const onFormSubmit = (values) => {
    console.log(values);
    const msg = `
     You got a message from ${values.name}: \n
     \n
     ${values.message}
     \n
     you can reply at ${values.email}
     `
    sendResponse(msg,"Contact Form")
  }

  return (
    <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
        Get in touch
      </h2>

      <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
        Any queries? Feel free to contact us.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
        <a
          href="#"
          className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-600"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>

          <span className="mt-2">KSRIET<br></br>KSR Kalvi nagar<br></br>Tiruchengode<br></br>Namakkal,637215</span>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/gfg-student-chapter-ksriet/mycompany/"
          className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>

          <span className="mt-2">GFG Student Chapter KSRIET</span>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/gfg_ksriet?igsh=cW1jemxldThzaHQy"
          className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-600"
        >
          <FaInstagram  className="text-lg"/>

          <span className="mt-2">GFGSC-KSRIET</span>
        </a>
      </div>

    <Formik
      initialValues={{ name:"",email:"",message:"" }}
      enableReinitialize={true}
      onSubmit={(values) => {
        onFormSubmit(values);
      }}
      isSubmitting={true}
      validationSchema={contactFormSchema}
    >
        <Form className="container flex flex-col mx-auto space-y-5">

          <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <TextField
                  spanClass="col-span-3"
                  label="Name"
                  name="name"
                  id="name"
                  type="text"
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <TextField
                  spanClass="col-span-3"
                  label="Email"
                  name="email"
                  id="email"
                  type="text"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <TextareaField
                spanClass="col-span-full"
                label="Message"
                name="message"
                id="message"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Send Message
              </button>
            </div>
          </div>
                
        </Form>
    </Formik>
    </section>
  );
};

export default ContactForm;
