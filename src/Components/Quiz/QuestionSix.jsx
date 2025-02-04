import React from "react";

export default function QuestionSix() {
  return (
    <>
      <section className="quiz">
        <div className="container">
          <div className="row">
            <div className="qsix-title mt-4">
              <p className="bg-light main-color p-2">
                <span className="text-dark">السؤال الرابع</span> : ج / ما
                النتائج المترتبة على ؟
              </p>
            </div>
            <div className="col-md-12">
              <div className="container QuestionFourB">
                <form>
                  <div className="my-3 d-flex flex-column align-items-start">
                    <label htmlFor="qsix-1">
                        1- تحكم الوطن العربى فى أهم الطرق العالمية 
                    </label>
                    <textarea
                      type="text"
                      className="form-control my-3 w-50"
                      id="qsix-1"
                    />
                  </div>
                  <div className="my-3 d-flex flex-column align-items-start">
                    <label htmlFor="qsix-2">
                        2- استشهاد عدد كبير من حفظة القرآن الكريم فى حروب المرتدين
                    </label>
                    <textarea
                      type="text"
                      className="form-control my-3 w-50"
                      id="qsix-2"
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
