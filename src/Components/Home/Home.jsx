import React from "react";
import style from "./Home.module.css";
import img1 from "../../assets/images/image 1.png";
import img2 from "../../assets/images/text.png";
import img3 from "../../assets/images/6f39d7c1fa54db03d2e135c0065f91e2.png";
import img4 from "../../assets/images/Star 1.png";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-8 py-4 main-bg`}>
            <div className={style.trans}>
              <div className="col-md-12 mb-5 pb-5">
                <div className="d-flex">
                  <img src={img1} className={style.mimg} alt="" />
                  <p className="ps-2 text-uppercase text-white pt-3">
                    Peachy Pup <br /> Bakery
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className={`text-white ${style.head}`}>
                      Tasty pastries
                    </h1>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                    <div className=" my-4">
                      <button className="btn btn-warning text-uppercase text-white fw-bold rounded-4">
                        SEE MORE
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="">
                      <img
                        src={img3}
                        className="w-100 position-relative"
                        alt=""
                      />
                      <img src={img2} className={style.img11} alt="" />
                      <img src={img4} className={style.img22} alt="" />
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
           
          </div>
          
          <div className={`col-md-4 ${style.right}`}></div>
        </div>
      </div>
    </>
  );
}
