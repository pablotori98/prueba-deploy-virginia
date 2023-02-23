import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const AllReviewsEnglish = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.displayreviews();
  }, []);
  console.log(store.reviews);
  return (
    <Box className="reviewsfather">
      <h1 className="fontabhaya text-center mt-2">Reviews</h1>
      <Box className="reviewsfatherbubbles">
        {store.reviews.map((element, index) => {
          return (
            <Box className="bubblereview" key={index}>
              <p className="p-3 text-center">{element.person_review}</p>
              <p className="p-1">
                <strong>
                  {element.first_name} {element.last_name}
                </strong>
              </p>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
