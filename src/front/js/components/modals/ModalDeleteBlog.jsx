import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "../../store/appContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";

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

export default function ModalDeleteBlog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const {actions, store} = React.useContext(Context)
const params = useParams();
 const navigate = useNavigate()
  return (
    <div>
      <Button className="buttonreview text-white mx-2 mt-2" onClick={handleOpen}>Borrar Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>¿Estas segur@ de borrar el post?</strong>
          </Typography>
          <Box className="d-flex justify-content-center mt-3">
            <Button onClick={()=>{actions.deletepost(params.idpost); navigate("/blog")}} variant="contained" sx={{ backgroundColor: "red",  marginRight:"0.5rem" }}>
              <strong>Borrar</strong>
            </Button>
            <Button onClick={()=>setOpen(false)} sx={{color:"black", marginLeft:"0.5rem"}}>Cancelar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
