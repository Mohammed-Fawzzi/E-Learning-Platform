import React from "react";
import Logo from "../../assets/LogoF.webp";
import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={Logo} className="logo" alt="Logo" />
            </div>

            <div className="col-md-6 align-content-center content">
              <h4 className="fw-bold">منصة م/ محمود العزونى التعليمية</h4>
              <p className="text-white py-3">
                في منصتنا التعليمية، نحن نقدم لك كل ما تحتاجه لتعلم مهارات جديدة
                واكتساب المعرفة بشكل فعال وممتع. نحن هنا لمساعدتك في كل خطوة.
              </p>

              <div className="d-flex flex-column align-items-start my-4 social">
                <p className="fw-bold">يمكنك متابعتنا عن طريق : </p>

                <div className="d-flex gap-4">
                  <Link
                    to="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon d-flex justify-content-center align-items-center"
                  >
                    <FaYoutube size={30} />
                  </Link>
                  <Link
                    to="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon d-flex justify-content-center align-items-center"
                  >
                    <FaFacebook size={30} />
                  </Link>
                  <Link
                    to="https://wa.me/+201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon d-flex justify-content-center align-items-center"
                  >
                    <FaWhatsapp size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="Info py-3">
        <div className="text-center form-link">
          <strong>{"<Developed By>"}</strong>
          <Link to="/mohamed-fawzzi" className="glass-effect mx-2">
            Mohamed Fawzzi
          </Link>
          <strong className="fw-bold fs-5">,</strong>{" "}
          <Link to="/ahmed-hassan" className="glass-effect mx-2">
            Ahmed Hassan
          </Link>
          <strong>{"<All Copy Rights Reserved @2024>"}</strong>
        </div>
      </div> */}
    </>
  );
}
