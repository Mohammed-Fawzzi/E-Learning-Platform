import React from "react";

export default function QuestionSeven() {
  return (
    <>
      <section className="quiz">
        <div className="container">
          <div className="row">
            <div className="qseven-title mt-4">
              <p className="bg-light main-color p-2">
                <span className="text-dark">السؤال السابع</span> : اختر الاجابة
                الصحيحه مما بين القوسين
              </p>
            </div>
            <div className="col-md-12">
              <div className="container QuestionSeven">
                <form>
                  <div className="my-3 d-flex flex-column align-items-start">
                    <label htmlFor="qseven-1">
                      1- تنمو أشجار الأرز فى اقليم مناخ ......
                    </label>
                    <div className="d-flex flex-wrap my-3">
                      <span className="me-2">(</span>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-1"
                          id="option1"
                          value="option1"
                        />
                        <label className="form-check-label" htmlFor="option1">
                          البحر المتوسط
                        </label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-1"
                          id="option2"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="option2">
                          الاستوائى
                        </label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-1"
                          id="option3"
                          value="option3"
                        />
                        <label className="form-check-label" htmlFor="option3">
                          الصحراوى
                        </label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-1"
                          id="option4"
                          value="option4"
                        />
                        <label className="form-check-label" htmlFor="option4">
                          المدارى
                        </label>
                      </div>
                      <span className="me-2">)</span>
                    </div>
                  </div>

                  <div className="my-3 d-flex flex-column align-items-start">
                    <label htmlFor="qseven-2">
                      2- تقع محمية ضانا فى دولة .......
                    </label>
                    <div className="d-flex flex-wrap my-3">
                      <span className="me-2">(</span>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-2"
                          id="option5"
                          value="option5"
                        />
                        <label className="form-check-label" htmlFor="option5">
                          الجزائر
                        </label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-2"
                          id="option6"
                          value="option6"
                        />
                        <label className="form-check-label" htmlFor="option6">
                          الكويت
                        </label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-2"
                          id="option7"
                          value="option7"
                        />
                        <label className="form-check-label" htmlFor="option7">
                          السودان
                        </label>
                      </div>
                      <div className="form-check me-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="qseven-2"
                          id="option8"
                          value="option8"
                        />
                        <label className="form-check-label" htmlFor="option8">
                          لبنان
                        </label>
                      </div>{" "}
                      <span className="me-2">)</span>
                    </div>
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
