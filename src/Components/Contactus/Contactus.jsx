import React, { useState } from "react";
import style from "./Contactus.module.css";
import Joi from "joi";
import axios from "axios";
import { toast } from "react-toastify";
export default function Contactus() {
  const notify = (msg, type) => {
    toast[type](msg);
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errorsList, setErrorsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let submitFormData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let validationResponse = validateFormData();
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "http://upskilling-egypt.com:3000/contact",
        user
      );

      if (data.message == "Email sent successfully") {
        notify("Email sent successfully", "success");
        console.log("a7a");
        setIsLoading(false);
      } else {
        notify(data.message, "error");
        setIsLoading(false);
      }
    }
  };
  let validateFormData = () => {
    const schema = Joi.object({
      name: Joi.string().required().min(2).max(20),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net", "eg", "gov", "edu"] } }),
      phone: Joi.string()
        .required()
        .pattern(/^01[0125][0-9]{8}$/),
    });
    return schema.validate(user, { abortEarly: false });
  };

  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="text-center main-color my-5 text-uppercase">
            Contact us
          </h1>
        </div>
        <div className="row offset-3">
          <div className="col-md-4">
            <form onSubmit={submitFormData}>
              <input
                onChange={getInputValue}
                type="text"
                className={`form-control text-black fw-bold my-2 required  ${style.main} `}
                name="name"
                placeholder="Full Name"
              />
              {errorsList.filter(
                (error) => error.context.label == "name"
              )[0] ? (
                <div className="alert alert-danger my-2">
                  {
                    errorsList.filter(
                      (error) => error.context.label == "name"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}
              <input
                onChange={getInputValue}
                type="email"
                className={`form-control text-black fw-bold my-2 required ${style.main} `}
                name="email"
                placeholder="Email"
              />
              {errorsList.filter(
                (error) => error.context.label == "email"
              )[0] ? (
                <div className="alert alert-danger my-2">
                  {
                    errorsList.filter(
                      (error) => error.context.label == "email"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}
              <input
                onChange={getInputValue}
                type="tel"
                className={`form-control text-black fw-bold my-2 required ${style.main} `}
                name="phone"
                placeholder="Phone Number"
              />
              {errorsList.filter(
                (error) => error.context.label == "phone"
              )[0] ? (
                <div className="alert alert-danger my-2">
                  {
                    errorsList.filter(
                      (error) => error.context.label == "phone"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}

              <div className="text-center p-2">
                <button className={`text-uppercase ${style.send} `}>
                  {isLoading == true ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "send"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 mt-5 ms-5 ">
            <div className="d-flex align-items-center">
              <i className={`fa-solid fa-envelope mb-2 ${style.icon}`}></i>
              <p className={`ms-2  ${style.text} `}>upskilling.eg1@gmail.com</p>
            </div>
            <div className="d-flex align-items-center">
              <i className={`fa-solid fa-phone mb-2 ${style.icon}`}></i>
              <p className={`ms-2  ${style.text} `}>+20 115 493 2137</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-5 ${style.footer}`}></div>
    </>
  );
}
