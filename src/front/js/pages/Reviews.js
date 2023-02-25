import React, { useContext, useLayoutEffect } from "react";
import { AllReviewsSpanish } from "../components/reviews/spanish/AllReviewsSpanish.jsx";
import { CreateReview } from "../components/reviews/CreateReview.jsx";
import { Context } from "../store/appContext.js";
import { AllReviewsEnglish } from "../components/reviews/english/AllReviewsEnglish.jsx";

export const Reviews = () => {
    const {actions, store} = useContext(Context)
    const newTitle = "Reviews";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);
  return (
  store.language=="spanish"?
  <AllReviewsSpanish />
  :
  <AllReviewsEnglish />)
};
