import React from "react";

export default function Features() {
  return (
    <>
      {/* Features */}
      <section>
        <div className="container py-5 mb-5 features">
          <div className="row justify-content-center gap-5 p-3">
            <div className="col-md-3 col-f p-4 text-center">
              <h6 className="py-4 fw-bold">أسلوب مختلف</h6>
              <p>فهم . تحليل . استنتاج . ربط . وحل كتير من الأخر</p>
            </div>
            <div className="col-md-3 col-f p-4 text-center">
              <h6 className="py-4 fw-bold">معاك لحظة بلحظة</h6>
              <p>
                مستواك في التاريخ هيكون ممتاز وهيختلف مع فيديوهاتنا وامتحاناتنا
              </p>
            </div>
            <div className="col-md-3 col-f p-4 text-center">
              <h6 className="py-4 fw-bold">دعم فنى</h6>
              <p>
                فريقنا الفني جاهز لحل أي مشكلة، وهنوفر ليك دعم مستمر في كل وقت
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
