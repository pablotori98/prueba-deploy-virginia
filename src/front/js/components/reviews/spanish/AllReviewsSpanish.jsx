import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/appContext";
import ModalCreateReview from "../../modals/ModalCreateReview.jsx";
import ModalDeleteReview from "../../modals/ModalDeleteReview.jsx";

export const AllReviewsSpanish = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.displayreviews();
  }, []);

  const [newReview, setNewReview] = useState(false);
  return (
    <Box className="reviewsfather">
      <h1 className="fontabhaya text-center mt-2">Reseñas</h1>
      <Box>
        {store.user.is_admin? <ModalCreateReview />:null}
      </Box>
      <Box className="reviewsfatherbubbles">
        {store.reviews.map((element, index) => {
          return (
            <Box className="bubblereview" key={index}>
              {store.user.is_admin ? (
                <ModalDeleteReview id={`${element.id}`}/>
              ) : null}
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
