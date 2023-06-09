import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "../../../store/appContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CreateReview } from "../../reviews/CreateReview.jsx";
import { FormModalModifyUser } from "./FormModalModifyUser.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F9EDE9",
  border: "5px solid #E1BAAC",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export default function ModalModifyUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { actions, store } = React.useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      {store.language == "spanish" ? (
        <Button
          className="buttonreview"
          sx={{ color: "white", padding: "0.8rem" }}
          onClick={handleOpen}
        >
          <strong>Modificar datos</strong>
        </Button>
      ) : (
        <Button
          className="buttonreview"
          sx={{ color: "white", padding: "0.8rem" }}
          onClick={handleOpen}
        >
          <strong>Modify Personal Information</strong>
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormModalModifyUser />
        </Box>
      </Modal>
    </div>
  );
}
