import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useMemo,
} from "react";
import { Box, Button, Grid, Container, Typography } from "@mui/material";
import { Context } from "../store/appContext";
import { Alert } from "@mui/material";
import Header from "../features/header/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { clientsColumns } from "../app/ClientsDataGrid";
import { getAllClients } from "../app/apicalls/clientCalls";
import ClientDetailView from "../features/clientsdetailview/ClientDetailView";
import { SpanishText } from "../features/clientsdetailview/aux/SpanishText";

const Clients = () => {
  const { actions, store } = useContext(Context);
  const [data, setData] = useState([]);
  const [clientID, setClientID] = useState(null);

  useLayoutEffect(() => {
    document.title = "Clientes";
  }, []);

  useEffect(() => {
    getAllClients().then((res) => {
      setData(res);
    });
    return () => {
      console.log("cleaning");
    };
  }, []);
  useEffect(() => {
    if (store.toggleAlert === true) {
      setTimeout(() => {
        actions.setAlertOff();
      }, 3000);
    }
  }, [store.toggleAlert]);

  useEffect(() => {
    if (clientID !== null) {
      console.log(clientID);
    }
  }, [clientID]);

  return (
    <Box className="container-fluid ClientsWrapper">
      {store.toggleAlert ? (
        <Alert variant="filled" severity={store?.alertType}>
          {store?.alertMessage}
        </Alert>
      ) : null}
      <Header title="Clientes" subTitle="Consulta de Clientes" />
      <Box className="ClientsBody">
        {clientID !== null ? <ClientDetailView clientID={clientID} /> : null}
        <Box className="ClientsDataGrid orangeComp" height={500}>
          <DataGrid
            components={{ Toolbar: GridToolbar }}
            columns={clientsColumns}
            rows={data}
            onRowClick={(e, row) => {
              setClientID(e.row.id);
            }}
            localeText={SpanishText}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                color: "#555",
                fontWeight: "600",
                fontSize: "1rem",
                borderBottom: "none",
              },
              "& .MuiDataGrid-cell:hover": {
                color: "#f9f9f9",
                cursor: "pointer",
              },
              "& .MuiDataGrid-row:nth-child(even)": {
                backgroundColor: "#f5f5f",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: '#ff5101',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
