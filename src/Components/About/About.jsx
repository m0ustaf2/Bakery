import React from "react";
import style from "./About.module.css";
import img from "../../assets/images/Rectangle 275 (1).png";

export default function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 main-bg">
            <div className="d-flex justify-content-center ">
              <div className="w-75 ps-5 ms-5">
                <h1 className={style.head}>
                  about <br /> us
                </h1>
                <p className={style.para}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className=" my-4">
                  <button className="btn btn-warning p-2 text-uppercase fw-bold text-white rounded-4">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-4">
            <div className="translate-middle-x">
              <img src={img} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
