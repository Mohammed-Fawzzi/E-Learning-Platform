import React from "react";

export default function QuestionFive() {
  return (
    <>
      <section className="quiz">
        <div className="container">
          <div className="row">
            <div className="qfourB-title mt-4">
              <p className="bg-light main-color p-2">
                <span className="text-dark">السؤال الرابع</span> : ب / رتب
                الأحداث التاريحية التالية من الأقدم الى الأحدث تشير الية العبارة
              </p>
            </div>
            <div className="col-md-12">
              <div className="container QuestionFourB">
                <form>
                  <div className="my-3 d-flex flex-column align-items-start">
                    <label htmlFor="qfourB-1">
                      ( غزوة أحد - فتح مكة - غزوة الخندق - صلح الحديبية - الهجرة
                      الى يثرب - غزوة بدر )
                    </label>
                    <input
                      type="text"
                      className="form-control my-3"
                      id="qfourB-1"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
