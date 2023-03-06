import React, { useContext, useEffect, useLayoutEffect } from "react";
import { AllReviewsSpanish } from "../components/reviews/spanish/AllReviewsSpanish.jsx";
import { CreateReview } from "../components/reviews/CreateReview.jsx";
import { Context } from "../store/appContext.js";
import { AllReviewsEnglish } from "../components/reviews/english/AllReviewsEnglish.jsx";

export const Reviews = () => {
  //Use Context
  const { actions, store } = useContext(Context);
  //Nombre pestaña
  const newTitle = "Reviews";
  useLayoutEffect(() => {
    document.title = newTitle;
  }, []);
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return store.language == "spanish" ? (
    <AllReviewsSpanish />
  ) : (
    <AllReviewsEnglish />
  );
};
