import React from "react";
import HistoryMap from "../../assets/map.webp";

export default function QuestionOne() {
  return (
    <>
      <section className="quiz">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="q-title">
                <p className="bg-light main-color p-2">
                  <span className="text-dark">السؤال الأول</span> : أمامك خريطه
                  صماء للوطن العربى وضح مدلول الأرقام عليها
                </p>
              </div>
              <div className="container QuestionOne">
                <form>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="q1">1- المحيط</label>
                    <input type="text" className="form-control" id="q1" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="q2">2- جبال</label>
                    <input type="text" className="form-control" id="q2" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="q3">3- مضيق</label>
                    <input type="text" className="form-control" id="q3" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="q4">4- الخليج</label>
                    <input type="text" className="form-control" id="q4" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="q5">5- دولة</label>
                    <input type="text" className="form-control" id="q5" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="q6">6- البحر</label>
                    <input type="text" className="form-control" id="q6" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src={HistoryMap}
                alt="Map"
                className="w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
