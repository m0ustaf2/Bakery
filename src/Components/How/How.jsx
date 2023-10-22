import React from "react";
import style from "./How.module.css";
import img1 from "../../assets/images/Rectangle 268 (1).png";
import img2 from "../../assets/images/Rectangle 269.png";
import img3 from "../../assets/images/Rectangle 270.png";
import img4 from "../../assets/images/Rectangle 271.png";
export default function How() {
  return (
    <>
      <div className="container-fluid">
        <div className="row position-relative">
          <div className={`col-md-4 ${style.left}`}></div>
          <div className="col-md-8 main-bg">
            <div className="row position-relative">
              <div className={`${style.trans} col-md-12`}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className={`${style.para}`}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                      </p>
                      <h1 className={`${style.head}`}>
                        How we <br /> work
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row my-3">
                      <div className="col-md-3">
                        <img className="w-100" src={img1} alt="" />
                      </div>
                      <div className="col-md-3">
                        <img className="w-100" src={img3} alt="" />
                      </div>
                      <div className="col-md-3">
                        <img className="w-100" src={img2} alt="" />
                      </div>
                      <div className="col-md-3">
                        <img className="w-100" src={img4} alt="" />
                      </div>
                    </div>
                    <div className="text-center my-4">
                      <button className="btn btn-warning text-uppercase text-white fw-bold rounded-4">
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
