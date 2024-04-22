import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sendEmailSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("correct email required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await toast.promise(
        emailjs.sendForm(
          process.env.REACT_APP_MY_SERVICE_ID,
          process.env.REACT_APP_MY_TEMPLATE_ID,
          form.current,
          { publicKey: process.env.REACT_APP_MY_PUBLIC_KEY }
        ),
        {
          pending: "Sending email...",
          success: "Email send successfully!",
          error: "Failed to send email",
        }
      );

      // Reset the form after successful submission
      e.target.reset();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div
      className="flex justify-center font-oxanium my-5 h-full sm:h-[70vh] items-center"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="p-5 mr-2 bg-gray-800 rounded-xl flex flex-col"
          >
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact<span className="primary-color">Me</span>
            </h1>
            <p className="text-normal text-lg font-medium text-gray-400 mt-4">
              let's get in touch <br /> Send me an Email
            </p>
            <div className="w-48 text-8xl flex justify-center items-center my-3 ml-5 text-purple-600">
              <AiFillMail />
            </div>
          </motion.div>
          <Formik
            initialValues={initialValues}
            validationSchema={sendEmailSchema}
          >
            {({ touched, errors }) => (
              <div>
                <Form
                  ref={form}
                  onSubmit={sendEmail}
                  className="px-6 pb-6 flex flex-col justify-center max-w-[700px]"
                >
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.6,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 0.2 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="flex flex-col"
                  >
                    <Field
                      type="text"
                      name="name"
                      placeholder="Full name"
                      className={
                        "w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                      }
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.6,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 0.2 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="flex flex-col mt-2"
                  >
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 0.2 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="flex flex-col mt-2"
                  >
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      placeholder="Your message"
                      className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                    />
                    {touched.message && errors.message && (
                      <p className="text-red-500">{errors.message}</p>
                    )}
                  </motion.div>
                  <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.12,
                      y: { type: "spring", stiffness: 60 },
                      opacity: { duration: 0.2 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    type="submit"
                    className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-3 px-3 rounded-lg mt-5"
                  >
                    Send
                  </motion.button>
                </Form>
                <ToastContainer
                  position="top-center"
                  style={{
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "30%",
                    "@media (maxWidth: 768px)": {
                      width: "70%",
                    },
                  }}
                />
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
