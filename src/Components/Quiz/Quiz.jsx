import React from "react";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import QuestionSix from "./QuestionSix";
import QuestionSeven from "./QuestionSeven";
import { Helmet } from "react-helmet";

export default function Quiz() {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>اختبارات المنصة</title>
      </Helmet>
      <section className="my-5 py-3">
        <h6 className="primary-color fw-bold text-center my-4">
          " اختبار على الوحده الاولى "
        </h6>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
        <QuestionFour />
        <QuestionFive />
        <QuestionSix />
        <QuestionSeven />
      </section>
    </>
  );
}
