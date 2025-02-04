import React from "react";

export default function QuestionThree() {
  return (
    <>
      <section className="quiz">
        <div className="container">
          <div className="row">
            <div className="qthree-title mt-4">
              <p className="bg-light main-color p-2">
                <span className="text-dark">السؤال الثالث</span> : أكتب كلمه{" "}
                <span className="text-dark">( صواب )</span> أمام العبارة الصحيحه
                وكلمة <span className="text-dark">( خطأ )</span> أمام العبارة
                الخاطئة
              </p>
            </div>
            <div className="col-md-12">
              <div className="container QuestionThree">
                <form>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qthree-1">
                      1- تشترك الدول العربية فى تاريخها ولغتها وثقافتها
                    </label>
                    <input type="text" className="form-control" id="qthree-1" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qthree-2">
                      2- الدول العربية فى الجناح الافريقى اكثر عددا من الجناح
                      الأسيوى
                    </label>
                    <input type="text" className="form-control" id="qthree-2" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qthree-3">
                      3- عرف العرب قبل الاسلام صناعه الأسلحه والأوانى الفخارية
                    </label>
                    <input type="text" className="form-control" id="qthree-3" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qthree-4">
                      4- نقضت قريش شروط صلح الحديبية
                    </label>
                    <input type="text" className="form-control" id="qthree-4" />
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <label htmlFor="qthree-5">
                      5- حطم الأصنام وطاف بالكعبة عند فتح مكة
                    </label>
                    <input type="text" className="form-control" id="qthree-5" />
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
