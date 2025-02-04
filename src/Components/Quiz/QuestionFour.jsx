import React from "react";

export default function QuestionFour() {
  return (
    <>
      <section className="quiz">
        <div className="container">
          <div className="row">
            <div className="qfourA-title mt-4">
              <p className="bg-light main-color p-2">
                <span className="text-dark">السؤال الرابع</span> : أ / أكتب ما
                تشير الية العبارة
              </p>
            </div>
            <div className="col-md-12">
              <div className="container QuestionThree">
                <form>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qfourA-1">
                      1- اول بناء بالمدينة المنورة بعد هجرة الرسول ﷺ اليها
                    </label>
                    <input type="text" className="form-control" id="qfourA-1" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qfourA-2">
                      2- الدستور الأول احقوق الانسان فى المدينه الأسيوى
                    </label>
                    <input type="text" className="form-control" id="qfourA-2" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qfourA-3">3- ثانى الخلفاء الراشدين</label>
                    <input type="text" className="form-control" id="qfourA-3" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qfourA-4">
                      4- حطم الأصنام وطاف بالكعبة عند فتح مكة
                    </label>
                    <input type="text" className="form-control" id="qfourA-4" />
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
