import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useContext } from "react";
import { Context } from "../../../store/appContext";
import FlexBetween from "../../styled/FlexBetween";
import { Navigate, useNavigate } from "react-router-dom";

const FullBar = () => {
  const navigate = useNavigate();
  const { actions, store } = useContext(Context);
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    if (store.isLogged === true) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [store.isLogged]);

  return (
    <Box className="FullbarWrapper">
      <FlexBetween sx={{ width: "100%", height: "100%" }}>
        {/* Logo and left side >>>> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <Box className="LogoContainer">
            <img
              className="Logo"
              src="https://www.nacex.com/pages/img/NACEX_logo.svg"
              alt="nacex"
            />
          </Box>
          <Box>
            <Typography variant="h5">
              Agencia <strong>2801</strong>
            </Typography>
          </Box>
        </Box>
        {/* <<<< Logo and left side */}

        {/* Right side >>>> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            className="me-5"
          >
            {isLogged ? null : (
              <Button className="NavButton" onClick={() => navigate("/login")}>
                Login <LoginIcon />
              </Button>
            )}
          </ButtonGroup>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default FullBar;
