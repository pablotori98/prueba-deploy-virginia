import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "../../store/appContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CreateReview } from "../reviews/CreateReview.jsx";

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

export default function ModalCreateReview() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const {actions, store} = React.useContext(Context)
const params = useParams();
 const navigate = useNavigate()
  return (
    <div>
      <Button className="buttonreview" sx={{color:"white", padding:"0.8rem"}} onClick={handleOpen}><strong>Crear Review</strong></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CreateReview />
        </Box>
      </Modal>
    </div>
  );
}
