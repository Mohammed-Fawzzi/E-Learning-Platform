import React from "react";

export default function QuestionTwo() {
  return (
    <>
      <section className="quiz">
        <div className="container">
          <div className="row">
            <div className="qtwo-title mt-4">
              <p className="bg-light main-color p-2 w-50">
                <span className="text-dark">السؤال الثانى</span> : أكمل العبارات
                الأتية
              </p>
            </div>
            <div className="col-md-12">
              <div className="container QuestionTwo">
                <form>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qtwo-1">
                      1- الصحراء البرى تحد الوطن العربى من جهة
                    </label>
                    <input type="text" className="form-control" id="qtwo-1" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qtwo-2">
                      2- نزل جبريل على سيدنا محمد ﷺ برسالة الاسلام هو فى سن
                    </label>
                    <input type="text" className="form-control" id="qtwo-2" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qtwo-3">
                      3- خرج النبى ﷺ عام 10 هجرية لأداء فريضة
                    </label>
                    <input type="text" className="form-control" id="qtwo-3" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qtwo-4">4- تم انشاء الدواوين فى عهد</label>
                    <input type="text" className="form-control" id="qtwo-4" />
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
