import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../../store/appContext";
import EditIcon from "@mui/icons-material/Edit";
import { ModPost } from "../ModPost/ModPost.jsx";
import ModalDeleteBlog from "../../modals/ModalDeleteBlog.jsx";

export const OnlyPostSpanish = () => {
  const { store, actions } = useContext(Context);
  const [openMod, setOpenMod] = useState(false);
  const params = useParams();
  useEffect(() => {
    actions.singleblogpost(params.idpost);
  }, []);

  return (
    <Box>
      {openMod == false ? (
        <Box className="blogsection">
          <Box>
            <Box className="d-flex justify-content-center"> 
            <Button className="buttonreview text-white mx-2 mt-2" onClick={() => setOpenMod(true)}>
              Modificar post <EditIcon />
            </Button>
          <ModalDeleteBlog/>
          </Box>
            <Box className="blogpost mb-5">
              <img className="imgpost" src={store.singlepost.image_post} />
              <Typography variant="h3" className="p-2">
                {store.singlepost.title_post}
              </Typography>

              <Divider className="my-3" />

              <Box className="px-5 py-2 paddingblogmobile">
                <Typography className="mt-3">
                  {store.singlepost.paragraph1}
                </Typography>

                {store.singlepost.paragraph2 == " " ? null : (
                  <Typography className="mt-3">
                    {store.singlepost.paragraph2}
                  </Typography>
                )}
                {store.singlepost.paragraph3 == " " ? null : (
                  <Typography className="mt-3">
                    {store.singlepost.paragraph3}
                  </Typography>
                )}
                {store.singlepost.paragraph4 == " " ? null : (
                  <Typography className="mt-3">
                    {store.singlepost.paragraph4}
                  </Typography>
                )}
                {store.singlepost.paragraph5 == " " ? null : (
                  <Typography className="mt-3">
                    {store.singlepost.paragraph5}
                  </Typography>
                )}
              </Box>
              <Typography className="mt-5 p-3">
                Escrito por Nombre psicologa
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <ModPost />
      )}
    </Box>
  );
};
